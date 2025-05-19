# 目录

## 函数

### ISNUMERIC - 判断表达式是否为有效的数值

``` sql
SELECT ISNUMERIC('0.6356234')  -- 1
SELECT ISNUMERIC('-0.6356234')  -- 1
SELECT ISNUMERIC('a0.6356234')  -- 0
```

### FIELD(value, e1, e2, e3, e4...en)
> 功能：根据指定元素value在输入列表“e1、e2、e3、e4...en”中的位置返回相应的位置序号，不在输入列表时则返回0。

``` sql
SELECT field(50,10,50,100);     -- 查询结果为：2
```

## MySQL函数替换为达梦函数

### FIND_IN_SET -> FIELD

## 查询表定义

``` sql
SELECT  COLUMN_NAME,  DATA_TYPE,  DATA_LENGTH,  DATA_PRECISION,  DATA_SCALE,  NULLABLE FROM  DBA_TAB_COLUMNS WHERE TABLE_NAME = 'DICTIONARY';
```