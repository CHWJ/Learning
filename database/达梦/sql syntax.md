# 目录

## 函数

### ISNUMERIC - 判断表达式是否为有效的数值

``` sql
SELECT ISNUMERIC('0.6356234')  -- 1
SELECT ISNUMERIC('-0.6356234')  -- 1
SELECT ISNUMERIC('a0.6356234')  -- 0
```