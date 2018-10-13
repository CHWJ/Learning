## 生成 SSH key
- ssh-keygen -t rsa -C "your email"

## 与github账号关联
- github --> Personal settings --> SSH and GPG keys --> 输入 id_rsa.pub 中的内容

## 测试 SSH key 是否配置成功
- ssh -T git@github.com

## clone 远端仓库到本地
- git clone git@github.com:CHWJ/Learning.git