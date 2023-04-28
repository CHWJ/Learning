> `Maven` 是功能强大的构建工具，能够帮我们自动化构建过程，从清理、编译、测试到生成报告，再到打包和部署。我们只需要输入简单的命令（如 `mvn clean install`），`Maven` 就会帮我们处理繁琐的任务；它最大化的消除了构建的重复，抽象了构建生命周期，并且为绝大部分的构建任务提供了已实现的插件。比如说测试，我们只需要遵循 `Maven` 的约定编写好测试用例，当我们运行构建的时候，这些测试便会自动运行。除此之外，`Maven` 能帮助我们标准化构建过程。在 `Maven` 之前，十个项目可能有十种构建方式，但通过 `Maven`，所有项目的构建命令都是简单一致的。有利于促进项目团队的标准化。

## 常用 `Maven` 命令
- mvn -v # 查看maven版本
- mvn compile # 编译
- mvn test # 测试
- mvn package # 打包
- mvn clean # 删除 target
- mvn install # 安装jar包到本地仓库中
- mvn archetype:generate -DgroupId=co.hoteam -DartifactId=Zigbee -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false # 创建一个新工程
- 参数
  - `-T 4`  4个子进程同时运行
  - `--fail-never`  无论项目结果如何，构建从不失败
  - `--fail-fast`  遇到构建失败就直接退出
  - `--fail-at-end` 仅影响构建结果，允许不受影响的构建继续

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

## 插件
- `maven-compiler-plugin` 指定JDK版本和编码
    > maven是个项目管理工具，如果我们不告诉它我们的代码要使用什么样的jdk版本编译的话，它就会用maven-compiler-plugin默认的jdk版本来进行处理，这样就容易出现版本不匹配的问题，以至于可能导致编译不通过的问题。例如代码中要是使用上了jdk1.7的新特性，但是maven在编译的时候使用的是jdk1.6的版本，那这一段代码是完全不可能编译成.class文件的。为了处理这一种情况的出现，在构建maven项目的时候，我习惯性第一步就是配置maven-compiler-plugin插件。
    
    配置文件 `pom.xml` 中添加
    ``` xml
    <build>  
        <plugins>  
            <plugin>  
                <groupId>org.apache.maven.plugins</groupId>  
                <artifactId>maven-compiler-plugin</artifactId>  
                <version>3.6.0</version>  
                <configuration>
                    <!-- 源代码使用的开发版本 -->
                    <source>1.8</source>
                    <!-- 需要生成的目标class文件的编译版本 -->
                    <target>1.8</target>
                </configuration>  
            </plugin>  
        </plugins>  
    </build>  
    ```
