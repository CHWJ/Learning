# 目录
- [目录](#目录)
  - [简介](#简介)
  - [需要安装的软件](#需要安装的软件)
  - [守护进程](#守护进程)
  - [常用文件和目录](#常用文件和目录)
  - [/etc/exports文件格式](#etcexports文件格式)
  - [服务启动顺序](#服务启动顺序)
  - [客户端查询 NFS 服务器的远程共享信息](#客户端查询-nfs-服务器的远程共享信息)
  - [how](#how)
    - [永久挂载共享目录](#永久挂载共享目录)
  - [常见故障解决方法](#常见故障解决方法)
    - [`The rpcbind failure error`](#the-rpcbind-failure-error)
    - [`The server not responding error`](#the-server-not-responding-error)
    - [`The NFS client fails a reboot error`](#the-nfs-client-fails-a-reboot-error)
    - [`The service not responding error`](#the-service-not-responding-error)
    - [`The program not registered error`](#the-program-not-registered-error)
    - [`The stale file handle error`](#the-stale-file-handle-error)
    - [`The unknown host error`](#the-unknown-host-error)
    - [`The mount point error`](#the-mount-point-error)
    - [`The no such file error`](#the-no-such-file-error)
    - [`No route to host`](#no-route-to-host)
    - [`Not owner`](#not-owner)
    - [`RPC: Program not registered & retrying`](#rpc-program-not-registered--retrying)
    - [`can’t contact portmapper: RPC: Remote system error – Connection refused`](#cant-contact-portmapper-rpc-remote-system-error--connection-refused)
  - [资料](#资料)

## 简介

Network File System的缩写，即网络文件系统。功能是让客户端通过网络访问不同主机上磁盘里的数据，主要用在类Unix系统上实现文件共享的一种方法。NFS在文件传送或信息传送过程中依赖于**RPC协议**。

## 需要安装的软件

- nfs-utils-* (对应的服务程序为 nfs-server)：包括基本的NFS命令与监控程序
- rpcbind-* (对应的服务程序为 rpcbind)：支持安全NFS RPC服务的连接(CentOS6.*之前rpcbind叫portmap)

## 守护进程

- nfsd：它是基本的NFS守护进程，主要功能是管理客户端是否能够登录服务器
- mountd：它是RPC安装守护进程，主要功能是管理NFS的文件系统。当客户端顺利通过nfsd登录NFS服务器后，在使用NFS服务所提供的文件前，还必须通过文件使用权限的验证。它会读取NFS的配置文件/etc/exports来对比客户端权限。
- rpcbind：主要功能是进行端口映射工作。当客户端尝试连接并使用RPC服务器提供的服务（如NFS服务）时，rpcbind会将所管理的与服务对应的端口提供给客户端，从而使客户可以通过该端口向服务器请求服务。

## 常用文件和目录

- /etc/exports                   NFS服务的主要配置文件
- /usr/sbin/exportfs             NFS服务的管理命令
- /usr/sbin/showmount             客户端的查看命令
- /var/lib/nfs/etab             记录NFS分享出来的目录的完整权限设定值
- /var/lib/nfs/xtab             记录曾经登录过的客户端信息

## /etc/exports文件格式

  ``` sh
  /var/www/mco/Resource *(insecure,rw,async,no_root_squash)
  ```

- secure：限制客户端只能从小于1024的tcp/ip端口连接nfs服务器（默认设置）
- insecure：允许客户端从大于1024的tcp/ip端口连接服务器
- ro：设置输出目录只读
- rw：设置输出目录读写
- sync：将数据同步写入内存缓冲区与磁盘中，效率低，但可以保证数据的一致性
- async：将数据先保存在内存缓冲区中，必要时才写入磁盘
- wdelay：检查是否有相关的写操作，如果有则将这些写操作一起执行，这样可以提高效率（默认设置）
- no_wdelay：若有写操作则立即执行，应与sync配合使用
- subtree：若输出目录是一个子目录，则nfs服务器将检查其父目录的权限(默认设置)
- no_subtree：即使输出目录是一个子目录，nfs服务器也不检查其父目录的权限，这样可以提高效率
- all_squash：将远程访问的所有普通用户及所属组都映射为匿名用户或用户组（nfsnobody）
- no_all_squash：与all_squash取反（默认设置）
- root_squash：将root用户及所属组都映射为匿名用户或用户组（默认设置）
- no_root_squash：与rootsquash取反
- anonuid=xxx：将远程访问的所有用户都映射为匿名用户，并指定该用户为本地用户（UID=xxx）
- anongid=xxx：将远程访问的所有用户组都映射为匿名用户组账户，并指定该匿名用户组账户为本地用户组账户（GID=xxx）

## 服务启动顺序

- systemctl start rpcbind
- systemctl start nfs-server
- systemctl enable rpcbind　　# 将 rpcbind 服务加入到开机启动项
- systemctl enable nfs-server　　# 将 nfs-server 服务加入到开机启动项

## 客户端查询 NFS 服务器的远程共享信息

``` sh
showmount -e 192.168.1.116

Export list for 192.168.1.116:
/home/hd_004             *
/var/www/mco/ImageUpload *
/var/www/mco/Resource    *
```

## how

### 永久挂载共享目录

``` sh
echo "mount -t nfs 192.168.1.116:/root/nfsfile /mnt/nfsfile" >> /etc/rc.d/rc.local　　# 将挂载命令写入 rc.local
```

## 常见故障解决方法

### `The rpcbind failure error`

故障现象：
nfs mount: server1:: RPC: Rpcbind failure
RPC: Timed Out
nfs mount: retrying: /mntpoint
 
故障原因：第一，可能因为客户机的hosts文件中存在错误的ip地址、主机名或节点名组合；
第二，服务器因为过载而暂时停止服务。

### `The server not responding error`

故障现象：
NFS server server2 not responding, still trying
 
故障原因：第一，网络不通，用ping命令检测一下。
第二，服务器关机。
 

### `The NFS client fails a reboot error`

故障现象：
启动客户机后停住了，不断显示如下提示信息：
Setting default interface for multicast: add net 224.0.0.0: gateway:
client_node_name.
 
故障原因：在etc/vfstab的mount选项中使用了fg而又无法成功mount服务器上的资源，改成bg或将该行注释掉，直到服务器可用为止。

### `The service not responding error`

故障现象：
nfs mount: dbserver: NFS: Service not responding
nfs mount: retrying: /mntpoint
 
故障原因：第一，当前级别不是级别3，用who -r查看，用init 3切换。
第二，NFS Server守护进程不存在，用ps -ef | grep nfs检查，用/etc/init.d/nfs start启动。

### `The program not registered error`

故障现象：
nfs mount: dbserver: RPC: Program not registered
nfs mount: retrying: /mntpoint
 
故障原因：第一，当前级别不是级别3。
第二，mountd守护进程没有启动，用/etc/init.d/nfs脚本启动NFS守护进程。
第三，看/etc/dfs/dfstab中的条目是否正常。

### `The stale file handle error`

故障现象：
stale NFS file handle
 
故障原因：服务器上的共享资源移动位置了，在客户端使用umount和mount重新挂接就可以了。

### `The unknown host error`

故障现象：
nfs mount: sserver1:: RPC: Unknown host
 
故障原因：hosts文件中的内容不正确。

### `The mount point error`

故障现象：
mount: mount-point /DS9 does not exist.
 
故障原因：该挂接点在客户机上不存在，注意检查命令行或/etc/vfstab文件中相关条目的拼写。

### `The no such file error`

故障现象：
No such file or directory.
 
故障原因：该挂接点在服务器上不存在，注意检查命令行或/etc/vfstab文件中相关条目的拼写。

### `No route to host`

故障现象：
$mount 192.168.115.120:/opt/data /data -t nfs -o rw
mount: mount to NFS server ‘192.168.115.120’ failed: System Error: No route to host.
 
故障原因：防火墙被打开，关闭防火墙。
这个原因很多人都忽视了，如果开启了防火墙（包括iptables和硬件防火墙），NFS默认使用111端口，我们先要检测是否打开了这个端口，还要检查TCP_Wrappers的设定。

### `Not owner`

故障现象：
$mount -F nfs -o rw 192.168.115.120:/mnt/data /data
nfs mount: mount: /data: Not owner
 
故障原因：这是Solaris 10版本挂载较低版本nfs时报的错误。
解决：
需要用-o vers=3参数
示例：
$mount -F nfs -o vers=3 192.168.115.120:/mnt/data /data

### `RPC: Program not registered & retrying`

故障现象：
nfs mount: 192.168.115.120: : RPC: Program not registered
nfs mount: retrying: /data
 
故障原因：没有启动NFS共享端服务。
解决：需要重新启动share端的NFS服务，
Linux:
mount: RPC: Program not registered
$/etc/init.d/nfs restart
Solaris:
mount: RPC: Program not registered
$/etc/rc.d/init.d/nfs restart

### `can’t contact portmapper: RPC: Remote system error – Connection refused`

故障现象：
$exportfs -a
can’t contact portmapper: RPC: Remote system error – Connection refused
 
故障原因：出现这个错误信息是由于server端的portmap没有启动。
解决：
$/etc/init.d/portmap start

## 资料

- [NFS服务的简介及常见故障解决方法](https://blog.51cto.com/longlei/2072847)