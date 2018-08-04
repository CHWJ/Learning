## MyBatis 简介
`MyBatis` 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射，几乎避免了所有的 JDBC 代码和手动设置参数以及获取结果集，使用简单的 XML 或注解来配置和映射原生信息，将接口和 Java 的 `POJOs`(Plain Old Java Objects,普通的 Java对象)映射成数据库中的记录，在国内可谓是占据了半壁江山。

## ORM 对比
> 一般应用的性能瓶颈并不是在于`ORM`，所以这三个框架技术选型应该考虑`项目的场景`、团队的`技能掌握情况`、`开发周期`(开发效率)。

|       |              |                  |         | 
|-------|--------------|------------------|---------| 
| 框架对比  | Spring JDBC  | Spring Data Jpa  | Mybatis | 
| 性能    | 性能最好         | 性能最差             | 居中      | 
| 代码量   | 多            | 少                | 多       | 
| 学习成本  | 低            | 高                | 居中      | 
| 推荐指数  | ❤❤❤          | ❤❤❤❤❤            | ❤❤❤❤❤   | 

## 使用
1. 在 `pom.xml` 中添加 `mybatis-spring-boot-starter` 的依赖
``` xml
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>1.3.2</version>
</dependency>
<!-- MYSQL包 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```
2. 在 `application.properties` 中配置数据库连接
``` xml
# 数据库连接
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/dianli?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull&allowMultiQueries=true&useSSL=false
spring.datasource.password=
spring.datasource.username=root
# mybatis 配置
mybatis.mapper-locations=classpath:org.nyqk.demo/mybatis/mapper/*.xml
# 这种方式需要自己在resources目录下创建mapper目录然后存放xml
#mybatis.mapper-locations=classpath:mapper/*.xml
mybatis.type-aliases-package=org.nyqk.demo.entity
# 驼峰命名规范。如：数据库字段是order_id，那么实体字段就要写成 orderId
mybatis.configuration.map-underscore-to-camel-case=true
```
- 上面的配置有问题？