## 系统常用命令
- `yum -y update` 更新包
- [echo](#echo)
- [date](#date)
- [cat](#cat)

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
- 设置系统的时间或日期

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


## 例子
- 查看系统版本
``` bash
# cat /etc/redhat-release
CentOS Linux release 7.4.1708 (Core)
```