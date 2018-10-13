## 安装
- 添加源到 `yum`
    ``` bash
    sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
    sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
    ```
- 安装
    ``` bash
    yum check-update
    sudo yum install code
    ```

## 用root打开code
- sudo /usr/share/code/code --unity-launch