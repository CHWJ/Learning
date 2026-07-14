## `Hyper-V`
- 使用 `DISM` 启用 `Hyper-V` 角色
``` PowerShell
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All
```
- 使用 `DISM` 禁用 `Hyper-V` 角色
``` PowerShell
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V-All
```

## telnet 测试端口

- 安装 Telnet 客户端
  ``` cmd
  dism /online /Enable-Feature /FeatureName:TelnetClient
  ```
- telnet [IP地址或域名] [端口号]
  - 端口已开通（连接成功）
    - 输入命令并回车后，CMD 窗口突然变成纯黑色，或者出现一行光标闪烁，有的服务还会返回一些英文字符
    - 按快捷键 `Ctrl + ]`，然后输入 `quit` 回车即可退出
  - 端口未开通（连接失败）
    - 如果命令卡住不动，几十秒后出现类似下面的提示：正在连接...无法打开到主机的连接。