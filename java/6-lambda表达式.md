## 函数式接口（Functional Interface）
> 这种类型的接口也称为 `SAM` 接口，即 `Single Abstract Method` interfaces。

- 定义
    - 是一个接口
    - 只能有一个抽象方法
- 用途
    - `Lambda` 表达式
    - 方法引用
- `@FunctionalInterface` 加上这个注解之后，编译器就会验证该接口是否满足函数式接口的要求

### 常用函数式接口

- `Function<T,R>`
  - R apply(T t)
- `Supplier<T>`
  - T get()
- `Consumer<T>`
  - void accept(T t)
- `Predicate<T>`
  - boolean test(T t)

## 方法引用（Method references）
> `lambda` 表达式被广泛用在函数式编程中，但它们很难阅读和理解。在许多情况下，`传递lambda 表达式（pass-through lambdas）`的存在只是为了传递一个或多个形参，最好将它替换为方法引用。

三种形参传递方式
- 类::实例方法
- 类::静态方法
- 对象::实例方法
- 示例
    ``` java
    String[] words = {"hello", "world"};

    Arrays.sort(words, (first, second) -> first.compareToIgnoreCase(second));
    Arrays.sort(words, String::compareToIgnoreCase);//类::实例方法

    ArrayList<String> wordList = new ArrayList<>(Arrays.asList(words));

    wordList.removeIf(obj -> Objects.isNull(obj));
    wordList.removeIf(Objects::isNull);//类::静态方法

    wordList.forEach(x -> System.out.println(x));
    wordList.forEach(System.out::println);//对象::实例方法
    ```
缺点
- 调用的模糊性
    > 查看方法引用，不容易确定形参传递给了静态方法还是用作了目标。要了解区别，我们需要知道方法是静态方法还是实例方法。从代码可读性角度讲，这不那么重要，但知道该区别对成功编译至关重要。<br><br>如果一个类的一个静态方法和一个兼容的实例方法同名，而且我们使用了方法引用，则编译器将认为该调用模糊不清。所以，举例而言，我们不能将 lambda 表达式 (Integer e) -> e.toString() 替换为方法引用 Integer::toString，因为 Integer 类同时包含静态方法 public static String toString(int i) 和实例方法 public String toString()。<br><br>您或您的 IDE 可能建议使用 Object::toString 解决这个特定的问题，因为 Object 中没有 static toString 方法。尽管该解决方案可以编译，但这种小聪明通常没什么帮助。您必须能够确认方法引用正在调用想要的方法。在存在疑问时，最好使用 lambda 表达式，以避免任何混淆或可能的错误。

## 构造函数引用
- 类似于方法引用，不同的是构造函数引用中的方法名都是 `new`。例如，`Employee::new` 是 `Employee` 构造函数引用。
- 数组构造函数可以构造一个泛型数组

## `lambda` 表达式
- 组成部分
    - 代码块
    - 参数
    - 自由变量的值
- 特点
    - 延迟执行
    - 变量
        - 表达式外部的局部变量的值不可变（即 `final`）
        - 表达式不能修改外部局部变量的值
        - 不允许与表达式外部的局部变量名相同
        - `this` 指代创建表达式的方法的 `this`
