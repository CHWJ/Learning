# 目录
- [目录](#目录)
    - [什么是npm](#什么是npm)
    - [npm 安装](#npm-安装)
    - [npm 镜像](#npm-镜像)
      - [NPM镜像管理工具](#npm镜像管理工具)
        - [nrm 可随时随地自由切换NPM镜像](#nrm-可随时随地自由切换npm镜像)
    - [npm 升级](#npm-升级)
    - [缓存](#缓存)
    - [模块的安装过程](#模块的安装过程)
    - [安装模块](#安装模块)
    - [查看安装的模块](#查看安装的模块)
    - [卸载模块](#卸载模块)
    - [更新模块](#更新模块)
    - [创建模块](#创建模块)
    - [npm 查看设置](#npm-查看设置)
    - [npm 设置代理](#npm-设置代理)
    - [第三方包管理器](#第三方包管理器)
      - [yarn](#yarn)

### 什么是npm

>NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，

常见的使用场景有以下几种：
- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### npm 安装
`cmd` 中输入`npm -v`来测试是否安装成功

### npm 镜像
- `npm config get registry` 读取
- `npm config set registry https://registry.npm.taobao.org`

#### NPM镜像管理工具

#####  nrm 可随时随地自由切换NPM镜像
- `npm i -g nrm`
- `nrm ls` 查看镜像
- `nrm add <name> <url>` 增加镜像
- `nrm del <name>` 移除镜像
- `nrm test <name>` 测试镜像
- `nrm use <name>` 使用镜像
- `nrm current` 查看当前镜像
- [nrm ls 依然不带星或nrm current 不显示当前？](https://github.com/Pana/nrm/issues/111)

### npm 升级
`nom install npm -g`

### 缓存

- `npm config get cache` 查看缓存目录的具体位置
- `npm cache clean --force` 强制清除缓存?

### 模块的安装过程

- 发出npm install命令
- npm 向 registry 查询模块压缩包的网址
- 下载压缩包，存放在~/.npm目录
- 解压压缩包到当前项目的node_modules目录

> 注意，一个模块安装以后，本地其实保存了两份。一份是~/.npm目录下的压缩包，另一份是node_modules目录下解压后的代码。但是，运行npm install的时候，只会检查node_modules目录，而不会检查~/.npm目录。也就是说，如果一个模块在～/.npm下有压缩包，但是没有安装在node_modules目录中，npm 依然会从远程仓库下载一次新的压缩包。这种行为固然可以保证总是取得最新的代码，但有时并不是我们想要的。最大的问题是，它会极大地影响安装速度。即使某个模块的压缩包就在缓存目录中，也要去远程仓库下载，这怎么可能不慢呢？另外，有些场合没有网络（比如飞机上），但是你想安装的模块，明明就在缓存目录之中，这时也无法安装。

### 安装模块
- `npm install ` 或者 `npm install –save-dev` 自动将package.json中的模块安装到node-modules文件夹下
- `npm install <Module Name>` 本地安装(安装到 `.node_modules目录`或者 `node_modules目录`)
- `npm install -g <Module Name>` 全局安装
- `npm install --save <Module Name> `  本地安装，并且将依赖写入到`package.json`文件中的`dependencies节点`(表明用于生产环境)
- `npm install --save -dev <Module Name> `  本地安装，并且将依赖写入到`package.json`文件中的`devDependencies节点`(表明用于开发环境)
- `npm install --prefer-offline <package-name>` 离线优先模式。如果设置为 --prefer-offline 则优先使用缓存数据，如果没有匹配的缓存数据，则从远程仓库下载。

### 查看安装的模块

- `npm list -g` 列出全局安装的模块
- `npm list ` 列出当前目录下安装的模块
- `npm list <Module Name>` 列出当前目录下安装某个模块

### 卸载模块
`npm uninstall <Module Name>`

### 更新模块
- `npm update <Module Name>` 当前目录下node_modules子目录里边的对应模块更新至最新版本
- `npm update -g <Module Name> ` 更新全局安装的模块

### 创建模块
- `npm init` 生成 package.json 文件

### npm 查看设置
`npm config list`

### npm 设置代理
- `npm config set proxy http://127.0.0.1:1080`
- `npm config set https-proxy http://127.0.0.1:1080`
- `npm config delete proxy`
- `npm config delete https-proxy`

### 第三方包管理器

#### yarn

- yarn config set registry https://registry.npm.taobao.org
- yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/