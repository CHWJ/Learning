### 什么是npm

>NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，

常见的使用场景有以下几种：
- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### npm 安装
`cmd` 中输入`npm -v`来测试是否安装成功

### npm 升级
`nom install npm -g`

### 安装模块
`npm install <Module Name>`

### 卸载模块
`npm uninstall <Module Name>`

### cnpm安装

>由于国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用[淘宝NPM镜像](http://npm.taobao.org/)。淘宝NPM镜像是一个完整`npmjs.org`镜像，你可以用此代替官方版本(只读)，同步频率目前为10分钟一次以保证尽量与官方服务同步。你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm。

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

这样就可以使用 `cnpm` 命令来安装模块了：`cnpm install [name]`

### npm 查看设置
`npm config list`

### npm 设置代理
- `npm config set proxy http://127.0.0.1:1080`
- `npm config set https-proxy http://127.0.0.1:1080`
- `npm config delete proxy`
- `npm config delete https-proxy`