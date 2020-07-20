### 查看大小

- select relname,pg_size_pretty(pg_relation_size(relid))
from pg_stat_user_tables
where schemaname='public' and relname like '%mg%'
order by pg_relation_size(relid) desc;