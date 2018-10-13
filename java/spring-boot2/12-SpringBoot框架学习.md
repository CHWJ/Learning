# 注解
- Spring提供XML配置、注解配置或Java配置来实现Bean的创建和注入
- Spring IoC(ApplicationContext)容器负责进行扫描Bean，进行Bean的初始化、配置和依赖管理
## 注解作用域
> 以下文字来自 [Bean的作用域](http://wiki.jikexueyuan.com/project/spring/bean-scopes.html)

> 当在 Spring 中定义一个 bean 时，你必须声明该 bean 的作用域。例如，为了强制 Spring 在每次需要时都产生一个新的 bean 实例，你应该声明 bean 的作用域的属性为 `prototype`。同理，如果你想让 Spring 在每次需要时都返回同一个bean实例，你应该声明 bean 的作用域的属性为 `singleton`。 

|                 |     | 
|-----------------|---------------------------------------------------| 
| 作用域           | 描述           | 
| singleton       | 该作用域将 bean 的定义的限制在每一个 Spring IoC 容器中的一个单一实例(默认)。                            | 
| prototype       | 该作用域将单一 bean 的定义限制在任意数量的对象实例。                                               | 
| request         | 该作用域将 bean 的定义限制为 HTTP 请求。只在 web-aware Spring ApplicationContext 的上下文中有效。   | 
| session         | 该作用域将 bean 的定义限制为 HTTP 会话。 只在web-aware Spring ApplicationContext的上下文中有效。    | 
| global-session  | 该作用域将 bean 的定义限制为全局 HTTP 会话。只在 web-aware Spring ApplicationContext 的上下文中有效。 | 


## 常用注解
- [`@Scope`](#`@Scope`) 用来配置 spring bean 的作用域
- [`@RequestMapping`](#`@RequestMapping`)
- [`@ResponseBody`](#`@ResponseBody`)
- 声明Bean的注解
    - [`@Component`](#`@Component`) 没有明确角色的组件
    - [`@Service`](#`@Service`) 在业务逻辑层（Service层）使用
    - [`@Repositpry`](#`@Repositpry`) 在数据访问层（dao层）使用
    - [`@Controller`](#`@Controller`) 用于标注控制层组件
    - [`@RestController`](#`@RestController`)
- 注入Bean的注解
    - [`@Autowired`](#`@Autowired`)
    - [`@Qualifier`](#`@Qualifier`)
- 实现Java配置的注解(Spring Boot推荐使用java配置完全代替XML配置，java配置是通过 `@Configration` 和 `@Bean` 注解实现的)
    - [`@Configration`](#`@Configration`)
    - [`@Bean`](#`@Bean`)

### `@Component`
- @Component 作用在 **类** 上
- @Component 注解作用域默认为 `singleton`
- 使用注解配置和类路径扫描时，被@Component注解标注的类会被Spring扫描并注册为Bean
- @Component 使用在不确定哪一个层的时候使用，可以作用在任何层次，把普通pojo实例化到spring容器
- **不推荐使用 @Component 注解**，而应该使用它的扩展，如@Service、@Repository

### `@Service`
- @Service 是 @Component 注解的一个特例，作用在类上
- @Service 注解作用域默认为 singleton
- 使用注解配置和类路径扫描时，被 @Service 注解标注的类会被 Spring 扫描并注册为 Bean
- @Service 用于标注业务层组件,表示定义一个 bean
- @Service 使用时没有传参数，Bean名称默认为当前类的类名，首字母小写
- @Service("serviceBeanId") 或 @Service(value="serviceBeanId") 使用时传参数，使用 value作为 Bean 名字

### `@Scope`
- `singleton` 单例模式 Spring 容器中有且只有一个Bean实例，只要Spring容器不销毁或退出，该Bean实例就会一直存活
- `prototype` 原型模式 每次获取Bean的时候会有一个新的实例，Spring容器不能对返回Bean实例的整个生命周期负责
- `request` 只适用于Web程序，每一次HTTP请求都会产生一个新的bean，同时该bean仅在当前HTTP request内有效，当请求结束后，该对象的生命周期即告结束
- `session` 只适用于Web程序，针对每一次HTTP请求都会产生一个新的bean，同时该bean仅在当前HTTP session内有效
- `application` 只适用于Web程序，全局作用域

### `@Repositpry`
- @Repository 注解作用在类上
- @Repository 注解作用域默认为 singleton
- 使用注解配置和类路径扫描时，被 @Repository 注解标注的类会被Spring扫描并注册为 Bean
- @Repository 注解用于标注数据访问组件，即 DAO组件
- @Repository 注解的作用不只是将类识别为 Bean，同时它还能将所标注的类中**抛出的数据访问异常**封装为 Spring 的数据访问异常类型

### `@Controller`
- @Controller 注解作用在类上
- 使用注解配置和类路径扫描时，被 @Controller 注解标注的类会被 Spring 扫描并注册为 Bean
- @Controller 用于标注Web中控制层组件
- 被 @Controller 标注的类负责处理由 DispatcherServlet 分发的请求，它把用户请求的数据经过业务处理层处理之后封装成一个 Model ，然后再把该 Model 返回给对应的 View 进行展示
- @Controller 和 @RequestMapping、@RequestParam等一些注解共同处理URL的映射

### `@RequestMapping`
- @RequestMapping 注解用来处理请求地址映射
- @RequestMapping 注解作用在类或方法上
    - 方法上的 @RequestMapping 会继承在类上的 @RequestMapping
- 返回字符串，默认是视图名。Spring Boot 视图默认路径：`resources/templates`
- @RequestMapping 注解有 7 个参数
    - `value`和`path` 指定请求的实际地址，指定的地址可以是URI Template 模式
        - 符号 `?` 匹配单个字符
        - 符号 `*` 匹配零个或多个字符
        - 符号 `**` 匹配零个或多个目录
        ``` java
        @RequestMapping("/test")
        @RequestMapping(value="/test")
        @RequestMapping(path="/test")
        @RequestMapping(path="/test/*.do")
        ```
    - `method` 指定请求的method类型(`GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE`)。Spring Boot也提供了简化版后的@RequestMapping
        - `GET`     对应 `@GetMapping`
        - `POST`    对应 `@PostMapping`
        - `PUT`     对应 `@PutMapping`
        - `DELETE`  对应 `@DeleteMapping`
        - `PATCH`   对应 `@PatchMapping`
        ``` java
        @RequestMapping(value="/test", method=RequestMethod.GET)
        @RequestMapping(value="/test", method=RequestMethod.POST)
        @GetMapping("/test")
        @PostMapping("/test")
        ```
    - `consumes` 指定处理允许的媒体类型，例如application/json, text/html
        ``` java
        // 仅处理request Content-Type为“text/plain”类型的请求
        @RequestMapping(value="/test", consumes="text/plain")
        @RequestMapping(value="/test", consumes={"text/plain", "application/*"})
        ```
    - `produces` 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
        ``` java
        // 仅处理request请求中Accept头中包含了"text/plain"的请求，同时暗示了返回的内容类型为text/plain
        @RequestMapping(value="/test", products="text/plain")
        @RequestMapping(value="/test", produces={"text/plain", "application/*"})
        ```
    - `params` 指定request中必须包含的请求参数，才会进入此方法
        ``` java
        // 仅处理请求中包含了名为“action”，值为“query”的请求
        @RequestMapping(value = "/test", params="action=query")
        ```
    - `headers` 指定请求中必须包含的请求头，才能进入此方法
        ``` java
        // 仅处理request的header中包含了指定content-type=text/*的请求；
        @RequestMapping(value = "/pets", headers = "content-type=text/*")
        ```
- @RequestMapping 方法参数 
    - @PathVariable 将URL中的值映射到方法参数中    
        - 符号 {} 中的变量名与方法参数名一一对应
        - 如果不想对应，如@RequestMapping中的变量名为id，方法参数名为index，可以使用`@PathVariable("id") String index`来对应

        ``` java
        @Controller
        @RequestMapping("/test/{id}")
        public class PathVariableTest {

            @GetMapping("/{name}/index.do")
            public String get (@PathVariable Integer id, @PathVariable String name) {
                return id + "_" + name;
            }
        }
        ```
    - `Model` Spring MVC中通用的模型
        - MVC框架中存在一个类似Map结构的 Model，可以向Model中添加视图需要的变量
        - Model对象用于方法参数的时候，Spring MVC在调用方法前自动创建 Model
            ``` java
            @Controller
            @RequestMapping("/test/{id}")
            public class PathVariableTest {
                @RequestMapping("/{name}/get.do")
                public String get (@PathVariable("id") Integer index, Model model) {
                    model.addAttribute("id", index);
                    return "/index";
                }
            }
            ```
    - ModelAndView 包含了模型和视图路径的对象
        - ModelAndView类似于Model，但额外提供了一个视图名称
        - ModelAndView既可以通过自动创建，也可以在方法中自己创建
            ``` java
            @RequestMapping("/{name}/get.do")
            public ModelAndView get (@PathVariable("name") Integer index, ModelAndView view) {
                view.addObject("id", index);
                view.setViewName("/index.ftl");
                return view;
            }

            @RequestMapping("/{name}/get.do")
            public ModelAndView get (@PathVariable("name") Integer index) {
                ModelAndView view = new ModelAndView();
                view.addObject("id", index);
                view.setViewName("/index.ftl");
                return view;
            }
            ```
    - JavaBean 将HTTP参数映射到JavaBean对象
    - MultipartFile 用于处理文件上传
    - @ModelAttribute 用于将该注解的变量作为Model的一个属性

### `@ResponseBody`
@ResponseBody注解支持将返回值放在response体内，而不是返回一个视图
- @ResponseBody注解直接将返回的对象输出到客户端
- 如果返回字符串，直接返回
- 如果返回不是字符串，默认使用Jackson将对象序列化成JSON字符串后输出
``` java
@Controller
@RequestMapping("/bi")
public class ResponseBodyTest {
    @RequestMapping("/login")
    @ResponseBody
    public String get () {
        return "Hello Spring Boot!";
    }
}
```

### `@RestController`
- @RestController是一个组合注解，即 @RestController = @Controller + @ResponseBody
- @RestController注解直接将返回的对象输出到客户端
- 如果返回字符串，直接返回
- 如果返回不是字符串，默认使用Jackson将对象序列化成JSON字符串后输出

### `@Autowired`
> 在Spring Boot应用启动时，Spring容器会自动装载一个org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor处理器，当容器扫扫描到@Autowired注解时，就会在IoC容器就会找相应类型的Bean，并且实现注入。

- 如果查询结果Bean刚好为一个，自动注入
- 如果查询结果Bean不止一个，通过@Qualifier注解指定自动装配Bean的名称
- 如果没有查询到对应类型的Bean，由于默认@Autowired(required=true)，会抛出异常，解决方法是使用@Autoiwired(required=false)，表示找不到匹配的 Bean 时也不报错

### `@Qualifier`
> 当使用 `@Autowired` 注解属性时，如果Spring 容器中有多个对应的实现，则需要 `@Qualifier` 注解来指定需要自动装配的Bean的名称。

### `@Configration`
声明当前类是一个配置类，相当于Spring中的一个XML文件

### `@Bean`
- 注解作用在方法上
- 指示一个方法返回可以被Spring容器扫描并管理的Bean
- 注解方法返回Bean名称默认为类名，首字母小写
    ``` java
    // 默认Bean名称为 myBean
    @Bean
    public MyBean myBean() {
        return new MyBean();
    }
    // 默认Bean名称为 myBean1
    @Bean("myBean1")
    public MyBean myBean() {
        return new MyBean();
    }
    // 设置的Bean的名称为 myBean1、myBean2
    @Bean({"myBean1", "myBean2"})
    public MyBean myBean() {
        return new MyBean();
    }
    ```
- 一般和 @Component或者@Configuration 一起使用
- 注解默认作用域为单例singleton作用域，可通过@Scope("prototype")设置为原型作用域
- Bean的初始化和销毁
    - Java配置方式：使用Bean的initMethod和destrodMethod
        ``` java
        public class MyBean {
            public void init() {
                System.out.println("MyBean开始初始化...");
            }
            public void destroy() {
                System.out.println("MyBean销毁...");
            }
            public String get() {
                return "MyBean使用...";
            }
        }

        ...
        
        @Bean(initMethod="init", destroyMethod="destroy")
        @Scope("prototype")
        public MyBean myBean() {
            return new MyBean();
        }
        ```
    - 注解方法：利用JSR-250的@ConstConstruct和@PreDestroy


## 参考
- [Spring Boot学习目录](https://blog.csdn.net/lipinganq/article/details/79238554)
- [Spring 教程](http://wiki.jikexueyuan.com/project/spring/)