## 配置远程访问
```
-- 允许任何ip地址(%表示允许任何ip地址)的电脑用root帐户和密码(123456)来访问
grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option; 
flush privileges;
```

## 远程访问
```
mysql -h192.168.2.198 -uroot -pabcd@1234;
```