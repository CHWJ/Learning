## 连接
``` redis
redis-cli -h 127.0.0.1 -p 6379
```

## 切换数据库
``` redis
select 0    -- 成功返回：OK
```

## 持续统计模式 `--stat`
``` redis
redis-cli -h 127.0.0.1 -p 6379 --stat
```

## 查询big key `--bigkeys`
``` redis
redis-cli -h 127.0.0.1 -p 6379 --bigkeys
```