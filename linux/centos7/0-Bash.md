## 系统常用命令
- `yum -y update` 更新包
- [echo](#echo)
- [date](#date)
- [cat](#cat)
- [reboot](#reboot)
- [poweroff](#poweroff)
- [wget](#wget)
- [ps](#ps)

### echo
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

### date
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
        | 参数 | 作用 | 
        |--|--| 
        | %t |跳格[Tab 键] |
        | %H |小时(00~23) |
        | %I |小时(00~12) |
        | %M |分钟(00~59) |
        | %S |秒(00~59)  |
        | %j |今年中的第几天|
- 设置系统时间或日期
    ``` bash
    # date -s "20170901 8:30:00"
    Fri Sep 1 08:30:00 CST 2017
    ```

### cat
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

### reboot
> 由于重启计算机这种操作会涉及硬件资源的管理权限,因此默认只能使用 root 管理员来
重启

### poweroff
> 由于关闭计算机这种操作会涉及硬件资源的管理权限,因此默认只能使用 root 管理员来
关闭


### wget
- wget [option] url
- 参数
    | 参数 | 作用                 | 
    |----|--------------------| 
    | -b | 后台下载模式             | 
    | -P | 下载到指定目录            | 
    | -t | 最大尝试次数             | 
    | -c | 断点续传               | 
    | -p | 下载页面内所有资源,包括图片、视频等 | 
    | -r | 递归下载               | 

### ps
- 查看系统中的进程状态
    ``` bash
    # ps
    PID TTY          TIME CMD
    3141 pts/0    00:00:00 bash
    60091 pts/0    00:00:00 ps
    ```
- 参数
    | 参数 | 作用                | 
    |----|-------------------| 
    | -a | 显示所有进程(包括其他用户的进程) | 
    | -u | 用户以及其他详细信息        | 
    | -x | 显示没有控制终端的进程       | 
