## stream

### groupingBy后，保持顺序

``` java
Map<Long, List<Entity>> map
                    = dataEntityList.stream()
                    .collect(Collectors.groupingBy(Entity::getFreezeTime, LinkedHashMap::new, Collectors.toList()));
```