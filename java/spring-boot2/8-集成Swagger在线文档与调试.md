## 简介
- 优缺点
    - 集成方便，功能强大
    - 在线调试与文档生成
    - 代码耦合，需要注解支持，但不影响程序性能
- 注解描述
    - `@Api`： 描述Controller
    - `@ApiIgnore`： 忽略该Controller，指不对当前类做扫描
    - `@ApiOperation`： 描述Controller类中的method接口
    - `@ApiParam`： 单个参数描述，与 `@ApiImplicitParam` 不同的是，它是写在参数左侧的。如（`@ApiParam(name =  "username",value = "用户名") String username`）
    - `@ApiModel`： 描述`POJO`对象
    - `@ApiProperty`： 描述`POJO`对象中的属性值
    - `@ApiImplicitParam`： 描述单个入参信息
    - `@ApiImplicitParams`： 描述多个入参信息
    - `@ApiResponse`： 描述单个出参信息
    - `@ApiResponses`： 描述多个出参信息
    - `@ApiError`： 接口错误所返回的信息


## 使用
1. 在 `pom.xml` 中添加 `swagger-spring-boot-starter` 的依赖
``` xml
<dependency>
    <groupId>com.battcn</groupId>
    <artifactId>swagger-spring-boot-starter</artifactId>
    <version>1.4.5-RELEASE</version>
</dependency>
```
2. 在 `application.properties` 中配置数据库连接
``` xml
# 扫描的包路径,默认扫描所有
spring.swagger.base-package=org.nyqk.demo
# 默认为 true
spring.swagger.enabled=true
```
3. 在实体类添加注解
``` java
// 指定映射实体到 a_user 表
@Entity(name = "a_user")
@ApiModel
public class UserModel implements Serializable {
    // 指定主键
    @Id
    @ApiModelProperty("编号")
    private String id;
    @ApiModelProperty("名称")
    private String name;

    /**
     * 忽略该字段的映射
     */
    @Transient
    @ApiModelProperty("邮箱")
    private String email;

    // 省略 getter、setter

    // 没有默认构造函数的话，会报错 org.hibernate.InstantiationException:No default constructor for entity
    public UserModel() { }

    public UserModel(String id, String name) {
        this.id = id;
        this.name = name;
    }
}
```
4. 在接口中添加注解
``` java
@RestController
@RequestMapping("/user")
@Api(tags = "0.1", description = "用户管理", value = "用户管理")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("getAll")
    @ApiOperation(value = "查询所有（DONE）")
    public ModelAndView getAll() {
        List<UserModel> list = userRepository.findAllByName("jim");

        ModelAndView view = new ModelAndView();
        view.setViewName("/User/index");
        view.addObject("list", list);
        return view;
    }

    @GetMapping("getById")
    @ApiOperation(value = "根据编号查询（DONE）")
    @ApiImplicitParam(name = "id", value = "用户编号", dataType = ApiDataType.STRING, paramType = ApiParamType.QUERY)
    public UserModel getById(String id) {
        Optional<UserModel> model = userRepository.findById(id);

        return model.get();
    }
}
```
5. 在 `DemoApplication.java` 添加 `@EnableSwagger2Doc`
6. 使用浏览器访问 `http://localhost:9090/dev/swagger-ui.html`，可看到![swagger-ui](/resource/image/java/spring-boot2/2018-08-04_125156.png)