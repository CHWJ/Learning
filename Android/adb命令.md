# 目录

## ADB（Android Debug Bridge）

## 常用命令
- `adb devices`   列出当前已连接到计算机的所有 Android 设备
- `adb connect <Android设备的IP地址><:5555>`  默认5555端口
- `adb disconnect <Android设备的IP地址><:5555>`
- `adb shell` 进入设备的命令行 Shell
- `adb install app.apk`   安装一个APK文件到设备上
- `adb uninstall com.example.app` 卸载包名为 com.example.app 的应用程序
- `adb pull /sdcard/file.txt` 将设备上的 file.txt 复制到计算机上
- `adb push localfile.txt /sdcard/` 将本地文件 localfile.txt 复制到设备的 /sdcard/ 目录
- `adb reboot`  重新启动设备
- `adb shell am start -n com.example.app/.MainActivity` 可以启动指定包的应用程序的 MainActivity
- `adb shell pm list packages`  列出设备上已安装的所有应用程序包名
- `adb forward`   ? 将本地端口转发到设备端口。这对于与设备上的服务进行调试或与本地开发服务器通信非常有用