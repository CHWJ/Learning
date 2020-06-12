Stream 的并行操作依赖于 Java7 中引入的 Fork/Join 框架（JSR166y）来拆分任务和加速处理过程。Java 的并行 API 演变历程基本如下：

    1.0-1.4 中的 java.lang.Thread
    5.0 中的 java.util.concurrent
    6.0 中的 Phasers 等
    7.0 中的 Fork/Join 框架
    8.0 中的 Lambda

Stream 的另外一大特点是，数据源本身可以是无限的。