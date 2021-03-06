# 目录
- [目录](#目录)
  - [yum](#yum)
  - [echo](#echo)
  - [date](#date)
  - [cat](#cat)
  - [reboot](#reboot)
  - [poweroff](#poweroff)
  - [wget](#wget)
  - [ps](#ps)
  - [top](#top)
  - [pidof](#pidof)
  - [firewall-cmd](#firewall-cmd)
  - [tar](#tar)
  - [rar](#rar)
  - [zip](#zip)
  - [unzip](#unzip)
  - [定时任务（crontab）](#定时任务crontab)
  - [磁盘空间](#磁盘空间)
    - [du -h file 显示文件大小](#du--h-file-显示文件大小)
    - [df -h 显示目前所有文件系统的可用空间及使用情形](#df--h-显示目前所有文件系统的可用空间及使用情形)
  - [shell 命令行](#shell-命令行)
  - [sed](#sed)
  - [字符串](#字符串)
  - [数组](#数组)
  - [vi](#vi)
  - [screen](#screen)
  - [less](#less)
  - [grep](#grep)

## yum

- `yum -y update` 更新包
- `yum list installed wireshark*` 查看是否安装
- `yum install wireshark` 安装包

## echo
- 输出字符串
    ``` bash
    # echo chwj
    chwj
    ```
- 输出变量的值
    ``` bash
    # echo $SHELL
    /bin/bash
    ```
- `-n` 输出文字后不换行

## date
- 显示系统的时间或日期
    - 显示当前时间（按照默认格式）
        ``` bash
        # date
        Sun Oct  7 11:44:25 CST 2018
        ```
    - 显示时间（按照指定格式）
        ``` bash
        # date "+%Y-%m-%d %H:%M:%S"
        2018-10-12 21:48:21
        ```
    - 时间格式
        | 参数 | 作用           |
        | ---- | -------------- |
        | %t   | 跳格[Tab 键]   |
        | %H   | 小时(00~23)    |
        | %I   | 小时(00~12)    |
        | %M   | 分钟(00~59)    |
        | %S   | 秒(00~59)      |
        | %j   | 今年中的第几天 |
- 设置系统时间或日期
    ``` bash
    # date -s "20170901 8:30:00"
    Fri Sep 1 08:30:00 CST 2017
    ```

## cat
- 显示单个文件内容
    ``` bash
    # cat /etc/passwd
    root:x:0:0:root:/root:/bin/bash
    bin:x:1:1:bin:/bin:/sbin/nologin
    ```
- 显示多个文件内容
    ``` bash
    # cat test1 test2
    Hello everybody
    Hi world
    ```
- 查看系统版本
    ``` bash
    # cat /etc/redhat-release
    CentOS Linux release 7.4.1708 (Core)
    ```

## reboot
> 由于重启计算机这种操作会涉及硬件资源的管理权限,因此默认只能使用 root 管理员来
重启

## poweroff
> 由于关闭计算机这种操作会涉及硬件资源的管理权限,因此默认只能使用 root 管理员来
关闭


## wget
- wget [option] url
- 参数
    | 参数 | 作用                                |
    | ---- | ----------------------------------- |
    | -b   | 后台下载模式                        |
    | -P   | 下载到指定目录                      |
    | -t   | 最大尝试次数                        |
    | -c   | 断点续传                            |
    | -p   | 下载页面内所有资源,包括图片、视频等 |
    | -r   | 递归下载                            |

## ps
- 查看系统中的进程状态
    ``` bash
    # ps
    PID TTY          TIME CMD
    3141 pts/0    00:00:00 bash
    60091 pts/0    00:00:00 ps
    ```
- 参数
    | 参数 | 作用                             |
    | ---- | -------------------------------- |
    | -a   | 显示所有进程(包括其他用户的进程) |
    | -u   | 用户以及其他详细信息             |
    | -x   | 显示没有控制终端的进程           |
- 进程状态
    - R 运行：进程正在运行或在运行队列中等待
    - S 中断：进程处于休眠中，当某个条件形成后或者接收到信号时，则脱离该状态
    - D 不可中断：进程不响应系统异步信号，即便用 kill 命令也不能将其中断
    - Z 僵死：进程已经终止，但进程描述符依然存在，直到父进程调用 wait4()系统函数后将进程释放
    - T 停止：进程收到停止信号后停止运行

## top
> 动态地监视进程活动与系统负载等信息

![top](/resource/image/centos/2018-10-13_12-49-35.png)

## pidof
- 查询某个指定服务进程的 PID 值
    ``` bash
    # pidof code
    71302 71234 71206 71188 71183 71160 71081 70933 70901 70899
    ```

## firewall-cmd

- 列出所有端口
  ``` bash
  firewall-cmd --permanent --zone=public --list-ports
  ```
- 查询指定端口
  ``` bash
  firewall-cmd --zone=public --query-port=443/tcp
  ```
- 开放指定端口（需要firewall-cmd --reload）
    ``` bash
    firewall-cmd --zone=public --add-port=5000/tcp --permanent
    ```
- 删除指定端口（需要firewall-cmd --reload）
    ``` bash
    firewall-cmd --zone=public --remove-port=443/tcp --permanent
    ```
- 重新载入配置
    ``` bash
    firewall-cmd --reload
    ```
- firewall状态
    ``` bash
    systemctl status firewalld
    systemctl stop firewalld
    systemctl start firewalld
    systemctl restart firewalld
    ```

## tar

- 解压 tar -zxf file -C path
- 打包后，以 gzip 压缩 tar -cvzPf /tmp/etc.tar.gz /etc .

## rar

- 解压 rar x test.rar ./
- 压缩 rar a test.rar ./test

## zip

- 压缩 zip -r backup.zip ./ETL/*

## unzip

- 解压 unzip file -d path

## 定时任务（crontab）

- 列出
	- crontab -l
- 编辑
	- crontab -e
- 查看服务
	- service crond status

## 磁盘空间

### du -h file 显示文件大小

### df -h 显示目前所有文件系统的可用空间及使用情形

## shell 命令行

- `Ctrl + a` 跳到命令行首
- `Ctrl + e` 跳到命令行尾
- `Ctrl + u` 删除光标至命令行首的内容
- `Ctrl + k` 删除光标至命令行尾的内容
- `Ctrl + 左方向键`  跳到前一个单词首部
- `Ctrl + 右方向键`  跳到后一个单词尾部
- `echo $?` 打印程序退出状态(返回代码)

## sed

- 用行为单位进行部分数据的搜寻并取代
  - `sed 's/要被取代的字串/新的字串/g'`
  - `sed 's!/root/0012/compareCode/!!g'`

## 字符串

- 比较测试
  - `-n str1` 检查 str1 的长度是否非0
  - `-z str1` 检查 str1 的长度是否为0
  - `str1 = str2` 检查 str1 是否和 str2 相同
  - `str1 != str2` 检查 str1 是否和 str2 不同
  - `str1 < str2` 检查 str1 是否比 str2 小
  - `str1 > str2` 检查 str1 是否比 str2 大
- `${#str1}` 获取str1的长度
- 分片
  - `${str1:4}` 从第4位开始截取后面所有字符串
  - `${str1:3:3}` 从第3位开始截取后面3位
  - `${str1: -4}` 截取后4位(右边有空格)
  - `${str1:(-4)}` 截取后4位
- 匹配并且替换
  - `${str1/23/bb}` 替换第一次匹配
  - `${str1//23/bb}` 替换所有匹配
  - `${str1/#abc/bb}` #以什么开头来匹配
  - `${str1/%41/bb}` %以什么结尾来匹配

## 数组

- `${#arr[*]}`、`${#arr[@]}` 获取数组长度

## vi

- 显示行号 `:set nu` or `:set number`
- 打开文件时跳转到特定行 `vi +linenumber file`
- 打开文件时跳转到特定字符 `vi +/string  file`

## screen

``` bash
screen -S yourname -> 新建一个叫yourname的session
screen -ls -> 列出当前所有的session
screen -r sessionId -> 回到sessionId这个session
screen -d yourname -> 远程detach某个session
screen -d -r yourname -> 结束当前session并回到yourname这个session
```

## less

- 可选参数
  - `-N` 显示行号
  - `-i` 搜索时大小写不敏感
- `g` or `<` 移动到最后一行
- `G` or `>` 移动到最后一行
- `<n>g` 跳转到第n行
- `?⟨text⟩` 使用正则向前搜索
- `/⟨text⟩` 使用正则向后搜索
- `n` 前一个搜索匹配
- `N` 前一个搜索匹配
- `q` 退出

## grep

- `-E` 

``` bash
grep -E '18410034-RX.*91 0D' 2021-06-28-log.log
```