## 使用JdbcTemplate访问数据库
1. 在 `pom.xml` 中添加对 `JdbcTemplate` 的依赖
``` xml
<!-- Spring JDBC 的依赖包，使用 spring-boot-starter-jdbc 或 spring-boot-starter-data-jpa 将会自动获得HikariCP依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<!-- MYSQL包 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```
2. 在 `application.properties` 中配置数据库连接
``` xml
spring.datasource.url = jdbc:mysql://localhost:3306/chapter4?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull&allowMultiQueries=true&useSSL=false
spring.datasource.username = root
spring.datasource.password = root
```
3. 测试数据库是否连接成功
    - 启动项目
    - 观察 `Console` 窗口，若输出如下则表示连接成功
        ``` txt
        2018-07-31 20:58:00.376  INFO 18296 --- [           main] o.s.j.e.a.AnnotationMBeanExporter        : Registering beans for JMX exposure on startup
        2018-07-31 20:58:00.391  INFO 18296 --- [           main] o.s.j.e.a.AnnotationMBeanExporter        : Bean with name 'dataSource' has been autodetected for JMX exposure
        2018-07-31 20:58:00.391  INFO 18296 --- [           main] o.s.j.e.a.AnnotationMBeanExporter        : Located MBean 'dataSource': registering with JMX server as MBean [com.zaxxer.hikari:name=dataSource,type=HikariDataSource]
        ```
4. 新建实体类
``` java
public class OrganModel {
    private int id;
    private String name;
    private LocalDateTime created;
    private IsAccepter is_accepter; // enum
    ...
}
enum IsAccepter {
    y, n
}
```
5. 新建 `OrganController.java`
``` java
@Controller
@RequestMapping("/organ")
public class OrganController {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public OrganController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("getAll")
    public ModelAndView getAll() {
        String sql = "select * from dianli_organization";
        List<OrganModel> list = jdbcTemplate.query(sql, new Object[]{}, new BeanPropertyRowMapper<>(OrganModel.class));

        ModelAndView view = new ModelAndView();
        view.setViewName("/Organ/index");
        view.addObject("list", list);
        return view;
    }
}
```
6. 在 `\templates\Organ` 目录新建 `index.html`文件
``` html
...
<body>
<script th:inline="javascript">
    console.log("list", [[${list}]]);
</script>
</body>
...
```
7. 使用浏览器访问 `http://localhost:9090/dev/organ/getAll`，`F12` 打开 `开发者工具` ，可在 `Console` 窗口看到输出JS数组