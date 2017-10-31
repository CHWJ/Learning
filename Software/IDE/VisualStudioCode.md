## 插件
### PHP Debug
- 来源[在此](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)
- 配置
    - 下载[XDebug](https://xdebug.org/download.php)（最好是TS版本），并放在`xampp\php\ext`目录下
    - 在`php.ini`文件末尾添加
        ``` ini
        [XDebug]
        zend_extension = "C:\xampp\php\ext\php_xdebug-2.5.4-5.6-vc11.dll"
        xdebug.remote_enable =1
        xdebug.remote_autostart = 1
        xdebug.remote_handler=dbgp
        xdebug.remote_mode=req
        xdebug.remote_port=9000//这里表示服务器的监听端口
        xdebug.idekey="phpStorm";//这里是调试器的关键字 在Chrome以及FireFox中插件配置的时候要用到
        ```
    - 重启`webserver`（Apache等）