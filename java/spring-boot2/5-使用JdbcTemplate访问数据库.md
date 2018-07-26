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