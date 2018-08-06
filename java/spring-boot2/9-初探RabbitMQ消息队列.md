## MQ 简介
MQ 全称（Message Queue）又名消息队列，是一种异步通讯的中间件。可以将它理解成邮局，发送者将消息传递到邮局，然后由邮局帮我们发送给具体的消息接收者（消费者），具体发送过程与时间我们无需关心，它也不会干扰我进行其它事情。

## RabbitMQ
`RabbitMQ` 是一个遵循`AMQP`协议，由面向高并发的 `erlanng` 语言开发而成，用在实时的、对可靠性要求比较高的消息传递上，支持多种语言客户端，支持`延迟队列`。

### 基础概念
- `Broker`：简单来说就是消息队列服务器实体
- `Exchange`：消息交换机，它指定消息按什么规则，路由到哪个队列
- `Queue`：消息队列载体，每个消息都会被投入到一个或多个队列
- `Binding`：绑定，它的作用就是把exchange和queue按照路由规则绑定起来
- `Routing Key`：路由关键字，exchange根据这个关键字进行消息投递
- `vhost`：虚拟主机，一个broker里可以开设多个vhost，用作不同用户的权限分离
- `producer`：消息生产者，就是投递消息的程序
- `consumer`：消息消费者，就是接受消息的程序
- `channel`：消息通道，在客户端的每个连接里，可建立多个channel，每个channel代表一个会话任务

### 常见应用场景
- 邮箱发送：用户注册后投递消息到`RabbitMQ`中，由消息的消费方异步的发送邮件，提升系统响应速度
- 流量削峰：一般在秒杀活动中应用广泛，秒杀会因为流量过大，导致应用挂掉，为了解决这个问题，一般在应用前端加入消息队列。用于控制活动人数，将超过此一定阀值的订单直接丢弃。缓解短时间的高流量压垮应用。
- 订单超时：利用`RabbitMQ`的延迟队列，可以很简单的实现订单超时的功能，比如用户在下单后30分钟未支付取消订单

## 使用
1. 在 `pom.xml` 中添加 `spring-boot-starter-amqp` 的依赖
``` xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```
2. 在 `application.properties` 中配置
``` xml
spring.rabbitmq.username=jimgee
spring.rabbitmq.password=
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.virtual-host=/
# 默认为none，开启自动ACK模式。这里设置手动ACK模式，目的是防止报错后未正确处理消息丢失。
spring.rabbitmq.listener.simple.acknowledge-mode=manual
```
3. 新建 `RabbitConfig.java`
``` java
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    public static final String DEFAULT_WORKORDER_QUEUE = "dev.workorder.register.default.queue";
    public static final String MANUAL_WORKORDER_QUEUE = "dev.workorder.register.manual.queue";

    @Bean
    public Queue defaultWorkorderQueue() {
        // 第一个是 QUEUE 的名字,第二个是消息是否需要持久化处理
        return new Queue(DEFAULT_WORKORDER_QUEUE, true);
    }

    @Bean
    public Queue manualWorkorderQueue() {
        // 第一个是 QUEUE 的名字,第二个是消息是否需要持久化处理
        return new Queue(MANUAL_WORKORDER_QUEUE, true);
    }
}

```
4. 新建实体类 `WorkorderModel.java`
``` java
import java.io.Serializable;
import java.time.LocalTime;

public class WorkorderModel implements Serializable {
    private String id;
    private String num;
    private LocalTime createTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public LocalTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalTime createTime) {
        this.createTime = createTime;
    }

    public WorkorderModel() {
    }
}
```
5. 新建生产者 `WorkorderController.java`
``` java
import org.nyqk.demo.config.RabbitConfig;
import org.nyqk.demo.entity.WorkorderModel;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;
import java.util.UUID;

@RestController
@RequestMapping(value = "/workorder")
public class WorkorderController {
    private final RabbitTemplate rabbitTemplate;

    @Autowired
    public WorkorderController(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @GetMapping
    public void defaultMessage() {
        WorkorderModel wo = new WorkorderModel();
        wo.setId(UUID.randomUUID().toString());
        wo.setNum("快响20180804001");
        wo.setCreateTime(LocalTime.now());
        this.rabbitTemplate.convertAndSend(RabbitConfig.DEFAULT_WORKORDER_QUEUE, wo);
        this.rabbitTemplate.convertAndSend(RabbitConfig.MANUAL_WORKORDER_QUEUE, wo);
    }
}
```
6. 新建消费者 `WorkorderHandler.java`
``` java
import org.nyqk.demo.config.RabbitConfig;
import org.nyqk.demo.entity.WorkorderModel;
import com.rabbitmq.client.Channel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class WorkorderHandler {
    private static final Logger log = LoggerFactory.getLogger(WorkorderHandler.class);

    @RabbitListener(queues = {RabbitConfig.DEFAULT_WORKORDER_QUEUE})
    public void listenerAutoAck(WorkorderModel wo, Message message, Channel channel) {
        // TODO 如果手动ACK,消息会被监听消费,但是消息在队列中依旧存在,如果 未配置 acknowledge-mode 默认是会在消费完毕后自动ACK掉
        final long deliveryTag = message.getMessageProperties().getDeliveryTag();
        try {
            log.info("[listenerAutoAck 监听的消息] - [{}]", wo.toString());
            // TODO 通知 MQ 消息已被成功消费,可以ACK了
            channel.basicAck(deliveryTag, false);
        } catch (IOException e) {
            try {
                // TODO 处理失败,重新压入MQ
                channel.basicRecover();
            } catch (IOException e1) {
                e1.printStackTrace();
            }
        }
    }

    @RabbitListener(queues = {RabbitConfig.MANUAL_WORKORDER_QUEUE})
    public void listenerManualAck(WorkorderModel wo, Message message, Channel channel) {
        log.info("[listenerManualAck 监听的消息] - [{}]", wo.toString());
        try {
            // TODO 通知 MQ 消息已被成功消费,可以ACK了
            channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
        } catch (IOException e) {
            // TODO 如果报错了,那么我们可以进行容错处理,比如转移当前消息进入其它队列
        }
    }
}
```
7. 使用浏览器访问 `http://localhost:9090/dev/workorder`，可在 `IntelliJ IDEA` 中 `Console` 窗口看到如下输出
``` txt
2018-08-05 10:54:10.548  INFO 5132 --- [cTaskExecutor-1] org.nyqk.demo.handler.WorkorderHandler   : [listenerManualAck 监听的消息] - [org.nyqk.demo.entity.WorkorderModel@8b1505]
2018-08-05 10:54:37.425  INFO 5132 --- [cTaskExecutor-1] org.nyqk.demo.handler.WorkorderHandler   : [listenerAutoAck 监听的消息] - [org.nyqk.demo.entity.WorkorderModel@118d748]
```