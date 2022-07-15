# 目录

## 用途

> 同时安装/管理多个nodejs版本

## 安装

- 卸载已安装的nodejs
- [下载最新版本](https://github.com/coreybutler/nvm-windows/releases)
- 安装时选择非系统盘
- 执行`nvm version`输出版本号说明安装成功

## 加速

找到nvm安装目录，编辑settings.txt文件，添加：
- `node_mirror: https://npm.taobao.org/mirrors/node/`
- `npm_mirror: https://npm.taobao.org/mirrors/npm/`

## 命令

- `nvm list`    查看已经安装的nodejs版本
- `nvm list available`  查看可以安装的版本
- `nvm install 17.9.1`  安装指定版本
- `nvm use 17.9.1`  切换到指定版本(**注意：使用管理员打开CMD**)
- `nvm uninstall 17.9.1`    卸载指定版本，卸载前最好先切换到其他版本