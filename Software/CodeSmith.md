# 目录

## 问题集合

### 找不到请求的 `.Net Framework Data Provider`

- 找到 `machine.config` 文件
  - %windir%\Microsoft.NET\Framework\v4.0.30319\Config\machine.config
  - %windir%\Microsoft.NET\Framework64\v4.0.30319\Config\machine.config
- 修改节点
  
  ``` xml
  <system.data>
    <DbProviderFactories>
        <add name="MySQL Data Provider" invariant="MySql.Data.MySqlClient" description=".Net Framework Data Provider for MySQL" type="MySql.Data.MySqlClient.MySqlClientFactory, MySql.Data, Version=6.7.4.0, Culture=neutral, PublicKeyToken=c5687fc88969c44d" />
    </DbProviderFactories>
    </system.data>
  ```

- 将 `MySql.Data.dll` 拷贝到 `C:\Program Files (x86)\CodeSmith\v8.0\SchemaProviders`目录
