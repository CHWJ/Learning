# 目录
- [目录](#目录)
	- [更改用户主机](#更改用户主机)
	- [设置密码](#设置密码)
	- [配置远程访问](#配置远程访问)
	- [远程访问](#远程访问)
	- [备份](#备份)
	- [还原](#还原)
	- [启用通用日志](#启用通用日志)
	- [my.ini](#myini)

## 更改用户主机

``` sql
RENAME USER 'wordpress'@'%' TO 'wordpress'@'localhost';
FLUSH PRIVILEGES;
```

## 设置密码

``` sql
update user set password=password('123456') where user='root';
```

## 配置远程访问

``` sql
-- 允许任何ip地址(%表示允许任何ip地址)的电脑用root帐户和密码(123456)来访问
grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option;
flush privileges;
```

## 远程访问

``` shell
mysql -h192.168.2.198 -P3306 -uroot -pabcd@1234;
```

## 备份

- mysqldump（在shell中执行）
	- 全库备份
		- mysqldump -h 10.185.18.224 -P 13306 -uroot -pabcd@1234 isc > backup_isc_20190429.sql
	- 只备份结构
		- -d
	- 只备份数据
		- -t
	- 只备份某库某表
		- --databases hdkj --tables table_name1 table_name2 table_name3
	- 排除某库某表
		- --databases hdkj --ignore-table=database.table1 --ignore-table=database.table2

## 还原

- source file（在MySQL shell中执行）
- mysqldump -u用户名 -p密码 -h主机 数据库 < 路径

## 启用通用日志

通用日志：记录建立的客户端连接和执行的语句。

- `XAMPP`
    - 在`my.ini`中添加
        - `general_log = ON`。`on`启用，`off`禁用
        - `log_output = TABLE`。`TABLE`在数据库中记录，`FILE`在文件中记录
- `mysql`命令行
    1. 打开`cmd`
    2. 输入`mysql`
    3. 输入`show variables like '%general%';`![图1](/resource/image/2017-10-19_153239.png)

## my.ini

- skip-grant-tables=1   让 mysqld 启动时不对密码进行验证