## JPA
`JPA` ( `Java Persistence API` ) 是`Sun` 官方提出的Java持久化规范。它为Java开发人员提供了一种对象/关联映射工具来管理Java应用中的关系数据，它的出现主要是为了简化现有的持久化开发工作和整合ORM技术，结束现在 `Hibernate`，`TopLink`，`JDO`等ORM框架各自为营的局面。
总的来说，`JPA`包括以下3方面的技术：
- ORM映射元数据： 支持XML和注解两种元数据的形式，元数据描述对象和表之间的映射关系，框架据此将实体对象持久化到数据库表中；
- API： 操作实体对象来执行CRUD操作，框架在后台替代我们完成所有的事情，开发者从繁琐的JDBC和SQL代码中解脱出来。
- 查询语言： 通过面向对象而非面向数据库的查询语言查询数据，避免程序的SQL语句紧密耦合。
## Spring Data JPA
常见的ORM框架中 `Hibernate` 的JPA最为完整，因此 `Spring Data JPA` 是采用基于 `JPA` 规范的 `Hibernate` 框架基础下提供了 `Repository` 层的实现。
- 优点
    - 丰富的API，简单操作无需编写额外的代码
    - 丰富的SQL日志输出
- 缺点
    - 学习成本较大，需要学习`HQL`
    - 配置复杂，虽然`SpringBoot`简化的大量的配置，关系映射多表查询配置依旧不容易
    - 性能较差，对比`JdbcTemplate`、`Mybatis`等ORM框架，它的性能无异于是最差的
### Spring Data JPA使用
1. 在 `pom.xml` 中添加 `spring-boot-starter-data-jpa` 的依赖
``` xml
<!-- Spring JDBC 的依赖包，使用 spring-boot-starter-jdbc 或 spring-boot-starter-data-jpa 将会自动获得HikariCP依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
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
# JPA配置
spring.jpa.hibernate.ddl-auto=update
# 输出日志
spring.jpa.show-sql=true
# 数据库类型
spring.jpa.database=mysql
```
- `spring.jpa.hibernate.ddl-auto`的几种值
    - create： 每次运行程序时，都会重新创建表，故而`数据会丢失`
    - create-drop： 每次运行程序时会先创建表结构，然后待程序结束时清空表
    - upadte： 每次运行程序，没有表时会创建表，如果对象发生改变会更新表结构，原有数据不会清空，只会更新（`推荐使用`）
    - validate： 运行程序会校验数据与数据库的字段类型是否相同，字段不同会报错
