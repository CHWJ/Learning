- settings.json
``` json
// 要将[cmder_root]换成 cmder 安装路径
"terminal.integrated.shell.windows": "cmd.exe",
"terminal.integrated.env.windows": {"CMDER_ROOT": "[cmder_root]"},
"terminal.integrated.shellArgs.windows": ["/k", "[cmder_root]\\vendor\\init.bat"]
```
- 重启 vscode