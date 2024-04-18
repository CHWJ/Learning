# 目录
- [目录](#目录)
  - [选择jdk](#选择jdk)
  - [设置环境变量](#设置环境变量)
  - [刷新环境变量](#刷新环境变量)
  - [查看JVM位数](#查看jvm位数)
  - [参考](#参考)

## 选择jdk

- 奇数版本，是BUG修正并全部通过检验的版本，官方强烈推荐使用这个版本
- 偶数版本，包含了奇数版本所有的内容，以及未被验证的BUG修复

## 设置环境变量

- vi /etc/profile
``` conf
#set java environment
JAVA_HOME=/usr/java/jdk1.8.0_171
JRE_HOME=/usr/java/jdk1.8.0_171/jre
CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
export JAVA_HOME JRE_HOME CLASS_PATH PATH
```

## 刷新环境变量
``` bash
source /etc/profile
```

## 查看JVM位数
``` bash
java -d64 -version
```

## 参考

- [基础服务系列-centos7 安装JDK](https://my.oschina.net/wuxinshui/blog/1827946)