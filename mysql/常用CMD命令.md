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
mysql -h192.168.2.198 -uroot -pabcd@1234;
```
