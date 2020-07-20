# 目录

## 参考资料

- [jar](https://docs.oracle.com/en/java/javase/11/tools/jar.html#GUID-51C11B76-D9F6-4BC2-A805-3C847E857867)

## 例子

- 更新 `xxx-epm-main-1.0-SNAPSHOT.jar` 包中的 `xxx-epm-officevisualization-1.0-SNAPSHOT.jar` 包中的 `OvFileApprovalNodeImpl.class` 文件
  - 列出名称为 `officevisualization` 的包的路径
    ``` cmd
    jar tvf xxx-epm-main-1.0-SNAPSHOT.jar | grep officevisualization
    // 输出：47812 Mon Jun 01 12:36:14 CST 2020 BOOT-INF/lib/xxx-epm-officevisualization-1.0-SNAPSHOT.jar
    ```
  - 使用上步输出的路径，提取名称为 `officevisualization` 包
    ``` cmd
    jar -xvf xxx-epm-main-1.0-SNAPSHOT.jar BOOT-INF/lib/xxx-epm-officevisualization-1.0-SNAPSHOT.jar
    ```
  - 跳转到目录 `BOOT-INF/lib/` 
    ``` cmd
    cd BOOT-INF/lib/
    ```
  - 列出名称为 `OvFileApprovalNodeImpl` 的文件的路径
    ``` cmd
    jar tvf xxx-epm-officevisualization-1.0-SNAPSHOT.jar | grep OvFileApprovalNodeImpl.class
    // 输出：18525 Mon Jun 01 12:36:14 CST 2020 com/xxx/epm/officevisualization/service/impl/OvFileApprovalNodeImpl.class
    ```
  - 使用上步输出的路径，提取名称为 `OvFileApprovalNodeImpl` 的文件
    ``` cmd
    jar -xvf xxx-epm-officevisualization-1.0-SNAPSHOT.jar com/xxx/epm/officevisualization/service/impl/OvFileApprovalNodeImpl.class
    ```
  - 手动替换目录 `com/xxx/epm/officevisualization/service/impl/` 下的 `OvFileApprovalNodeImpl.class` 文件
  - 更新 `xxx-epm-officevisualization-1.0-SNAPSHOT.jar` 包中的 `OvFileApprovalNodeImpl.class` 文件
    ``` cmd
    jar -uvf0 xxx-epm-officevisualization-1.0-SNAPSHOT.jar com/xxx/epm/officevisualization/service/impl/OvFileApprovalNodeImpl.class
    // 输出：正在添加: com/xxx/epm/officevisualization/service/impl/OvFileApprovalNodeImpl.class(输入 = 18525) (输出 = 18525)(存储了 0%)
    ```
  - 返回根目录
    ``` cmd
    cd ../../
    ```
  - 更新 `xxx-epm-main-1.0-SNAPSHOT.jar` 包中的 `xxx-epm-officevisualization-1.0-SNAPSHOT.jar` 包
    ``` cmd
    jar -uvf0 xxx-epm-main-1.0-SNAPSHOT.jar BOOT-INF/lib/xxx-epm-officevisualization-1.0-SNAPSHOT.jar
    // 输出：正在添加: BOOT-INF/lib/xxx-epm-officevisualization-1.0-SNAPSHOT.jar(输入 = 58834) (输出 = 58834)(存储了 0%)
    ```
- 打包 `jar -cfm0 xxx.jar /xxx/META-INF/MANIFEST.MF -C xxx .`