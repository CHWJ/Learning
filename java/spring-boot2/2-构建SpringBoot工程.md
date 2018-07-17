## 本节要点
- 使用`Spring Initializr`构建需要联网
- `pom.xml` 依赖使用国内镜像更快

## 创建一个`Spring Boot`项目
- 启动 `IntelliJ IDEA`
- `Create New Project`
- `Spring Initializr`
    1. 选择 `JDK` 所在目录
    2. 选择 `Spring Initializr` 服务器
        - ![Spring Initializr](/resource/image/java/spring-boot2/2018-06-01_224731.png)
    3. 填入 `Group`、`Artifact` 等信息
    4. 选择依赖 `Web`->`Web`
    5. 填入项目名称、路径等信息

## `Spring Boot` 常用配置
项目的配置文件一般是 `application.properties`，其路径是 `your project\src\main\resources\application.properties`。
- `server.port` 服务器 HTTP 端口，默认是 `8080`  
- `server.context-path=/myspringboot`  项目contextPath，一般在正式发布版本中，我们不配置
- `server.error.path=/error` 错误页，指定发生错误时跳转的URL
- `server.session-timeout=60` session最大超时时间(分钟)，默认为30
