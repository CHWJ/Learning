## 介绍
`Angular CLI` 是一个命令行界面工具，它可以创建项目、添加文件以及执行一大堆开发任务，比如测试、打包和发布。

## 设置开发环境
- 全局安装 `Angular CLI`
    ``` powershell
    npm install -g @angular/cli
    ```

## 创建新项目
- `Angular CLI` 会安装必要的 NPM 包、创建项目文件，并在该项目中生成一个简单的默认应用。这可能要花一点时间。
    ``` powershell
    ng new appName
    ```

## 启动开发服务器
- `ng serve` 命令会启动开发服务器，监听文件变化，并在修改这些文件时重新构建此应用。使用 `--open`（或 `-o`）参数可以自动打开浏览器并访问 http://localhost:4200/。
    ``` powershell
    cd my-app
    ng serve --open
    ```

## 检查代码风格
``` powershell
ng lint
```