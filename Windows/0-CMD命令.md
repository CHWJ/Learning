## `Hyper-V`
- 使用 `DISM` 启用 `Hyper-V` 角色
``` PowerShell
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All
```
- 使用 `DISM` 禁用 `Hyper-V` 角色
``` PowerShell
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V-All
```