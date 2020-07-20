# 目录

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
		- --databases hdkj --tables performance_da
	- 排除某库某表
		- --databases hdkj --ignore-table=database.table1 --ignore-table=database.table2

## 还原

- source file（在MySQL shell中执行）
- mysqldump -u用户名 -p密码 -h主机 数据库 < 路径

