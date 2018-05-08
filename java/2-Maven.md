> `Maven` 是功能强大的构建工具，能够帮我们自动化构建过程，从清理、编译、测试到生成报告，再到打包和部署。我们只需要输入简单的命令（如 `mvn clean install`），`Maven` 就会帮我们处理繁琐的任务；它最大化的消除了构建的重复，抽象了构建生命周期，并且为绝大部分的构建任务提供了已实现的插件。比如说测试，我们只需要遵循 `Maven` 的约定编写好测试用例，当我们运行构建的时候，这些测试便会自动运行。除此之外，`Maven` 能帮助我们标准化构建过程。在 `Maven` 之前，十个项目可能有十种构建方式，但通过 `Maven`，所有项目的构建命令都是简单一致的。有利于促进项目团队的标准化。

## 常用 `Maven` 命令
- mvn -v # 查看maven版本
- mvn compile # 编译
- mvn test # 测试
- mvn package # 打包
- mvn clean # 删除 target
- mvn install # 安装jar包到本地仓库中
- mvn archetype:generate -DgroupId=co.hoteam -DartifactId=Zigbee -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false # 创建一个新工程

## 镜像
- IntelliJ IDEA 2018.1.2\plugins\maven\lib\maven2\conf\settings.xml
``` xml
<mirror>
    <id>CN</id>
    <name>huaweicloud Central</name> 
    <url>https://mirrors.huaweicloud.com/</url>
    <mirrorOf>central</mirrorOf>
</mirror>
<!-- 镜像一般只会镜像central库 -->
<mirror>  
    <id>jboss</id>
    <name>jboss</name>  
    <url>https://repository.jboss.org/nexus/content/repositories/releases/</url>  
    <mirrorOf>JBoss Releases</mirrorOf>
</mirror>  
```
