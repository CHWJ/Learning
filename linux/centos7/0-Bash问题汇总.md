# 目录
- [目录](#目录)
  - [已知进程名称，如何查询是在哪个目录下执行命令的？](#已知进程名称如何查询是在哪个目录下执行命令的)
  - [已知进程名称，如何查询执行程序的所在目录？](#已知进程名称如何查询执行程序的所在目录)
  - [已经端口，如何查询哪个程序在监听？](#已经端口如何查询哪个程序在监听)
  - [已经进程id，如何查询进程对应的监听端口？](#已经进程id如何查询进程对应的监听端口)
  - [已经进程id，如何查询进程启动时间和运行时间？](#已经进程id如何查询进程启动时间和运行时间)

## 已知进程名称，如何查询是在哪个目录下执行命令的？

``` bash
ps -ef | grep dotnet  # PID:  122293
ll /proc/122293 | grep cwd  # lrwxrwxrwx.  1 root root 0 10月 27 09:35 cwd -> /usr/publishnetcore
```

## 已知进程名称，如何查询执行程序的所在目录？

``` bash
ps -ef | grep dotnet  # PID:  122293
ll /proc/122293 | grep exe  # lrwxrwxrwx.  1 root root 0 10月 26 16:56 exe -> /usr/publish/dotnet
```

## 已经端口，如何查询哪个程序在监听？

``` bash
netstat -ltnp | grep -w ':80' 此方法无法查询到 6379 (redis) 
netstat -anltp | grep 6379
lsof -i:6379
```

## 已经进程id，如何查询进程对应的监听端口？

``` bash
netstat -nap | grep 进程pid
```

## 已经进程id，如何查询进程启动时间和运行时间？

``` bash
ps -eo pid,tty,user,comm,lstart,etime | grep 122543 
# 参数说明：pid：进程ID，tty：终端，user：用户，comm：进程名，lstart：开始时间，etime：运行时间
122543 ?        root     java            Thu Nov 24 10:08:22 2022  4-01:07:43
```