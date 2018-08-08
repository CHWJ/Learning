## 介绍
> `Thymeleaf` 是现代化服务器端的 `Java` 模板引擎，不同与其它几种模板的是 `Thymeleaf` 的语法更加接近 `HTML`，并且具有很高的扩展性。详细资料可以浏览[官网](https://www.thymeleaf.org/)。

## 简明教程
1. 在 `pom.xml` 中添加对 `Thymeleaf` 依赖
    ``` xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    ```
2. 创建 `ThymeleafController.java` 用来映射HTTP请求与页面的跳转
    ``` java
    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.servlet.ModelAndView;

    @Controller
    @RequestMapping
    public class ThymeleafController {
        @GetMapping("/index")
        public ModelAndView index() {
            ModelAndView view = new ModelAndView();

            view.setViewName("/Thymeleaf/index");// 设置跳转的视图 默认映射到 src/main/resources/templates/Thymeleaf/index.html
            view.addObject("title", "Thymeleaf示例");
            view.addObject("employee", new Employee(18, "jim"));

            return view;
        }

        class Employee {
            private int id;
            private String name;

            public int getId() {
                return id;
            }

            public void setId(int id) {
                this.id = id;
            }

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public Employee(int id, String name) {
                this.id = id;
                this.name = name;
            }
        }
    }
    ```
3. 在 `src/main/resources/templates/Thymeleaf` 目录创建 `index.html` 文件
    ``` html
    <!DOCTYPE html>
    <html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
        <head>
            <meta charset="UTF-8">
            <title th:text="${title}">Title</title>
        </head>
        <body>
            <script th:inline="javascript">
                var test = [[${employee}]];
                console.log(test); // {id: 18, name: "jim"}
            </script>
            <p th:text="${employee?.name}"></p>
            <p th:text="${employee?.id}"></p>
        </body>
    </html>
    ```

## 模板热部署
> 修改静态页面都需要重启才生效，这点是很不友好的。原因是为了提高响应速度，默认情况下会缓存模板。
开发时在 `application.properties` 文件添加如下，修改静态内容时按 `Ctrl+Shift+F9` 即可重新加载
``` xml
spring.thymeleaf.cache = false
```

## 实用教程
- [母版页](#Layout)

### `Layout`
> 使用片段（fragment）实现母版页（Layout）功能

|                   |                      | 
|-------------------|----------------------| 
| 语法/标签          | 说明                   | 
| layout:fragment   | 定义模板片段，可以在子页面用同名片段覆盖 | 
| layout:decorator  | 引用Thymeleaf页面作为母版/模板 | 



## 参考
- [thymeleaf 参考手册](https://blog.csdn.net/zrk1000/article/details/72667478)
- [Thymeleaf使用技巧：使用片段（fragment）实现母版页（Layout）功能](https://ken.io/note/thymeleaf-skill-layout)