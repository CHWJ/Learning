### `Func<T, TResult>`委托

>封装一个方法，该方法具有一个参数，且返回由 TResult 参数指定的类型的值。

#### 语法

``` c#
public delegate TResult Func<in T, out TResult>(
	T arg
)
```
- 参数`arg`:类型`T`；此委托封装的方法的参数。
- 返回值:类型`TResult`；此委托封装的方法的返回值。
- 类型参数
    - `in T`此委托封装的方法的参数类型。
    - `out TResult`此委托封装的方法的返回值类型。

#### 示例

``` c#
   //使用 Func<T, TResult> 委托与 C# 中的匿名方法
   public static void Main()
   {
      Func<string, string> convert = delegate(string s)
         { return s.ToUpper();}; 

      string name = "Dakota";
      Console.WriteLine(convert(name));  //输出：DAKOTA 
   }
```
``` c#
   //将 lambda 表达式分配给 Func<T, TResult> 委托
   public static void Main()
   {
      Func<string, string> convert = s => s.ToUpper();

      string name = "Dakota";
      Console.WriteLine(convert(name));  //输出：DAKOTA 
   }
```

### `Action<T>`委托

>封装一个方法，该方法只有一个参数并且不返回值。

#### 语法

``` c#
public delegate void Action<in T>(
	T obj
)
```
- 参数`obj`:类型`T`；此委托封装的方法的参数。
- 类型参数
    - `in T`此委托封装的方法的参数类型。
    
### IEnumerator 接口

>支持对**非泛型**集合的简单迭代。
命名空间:   System.Collections
程序集:  mscorlib（位于 mscorlib.dll）

#### Syntax

``` c#
public interface IEnumerator
{
    bool MoveNext();
    Object Current { get; }
    void Reset();
}
```

### IEnumerable 接口

>**公开枚举器**，该枚举器支持在非泛型集合上进行简单迭代。
命名空间：  System.Collections
程序集：  mscorlib（在 mscorlib.dll 中）

#### Syntax

``` c#
public interface IEnumerable
{
    [Pure]
    [DispId(-4)]
    IEnumerator GetEnumerator();
}
```

### IQueryable 接口

>提供对未指定数据类型的特定数据源的查询进行计算的功能。
命名空间：  System.Linq
程序集：  System.Core（在 System.Core.dll 中）

#### Syntax

``` c#
public interface IQueryable : IEnumerable {
    // 获取与 IQueryable 的实例关联的表达式树。
    Expression Expression { get; }
    // 获取在执行与 IQueryable 的此实例关联的表达式树时返回的元素的类型。
    Type ElementType { get; }

    // 获取与此数据源关联的查询提供程序。
    IQueryProvider Provider { get; }
}
```

### Task
>表示一个异步操作。
命名空间:   System.Threading.Tasks
程序集:  mscorlib（位于 mscorlib.dll）
#### Syntax
``` c#
[HostProtectionAttribute(SecurityAction.LinkDemand, Synchronization = true, 
	ExternalThreading = true)]
public class Task : IAsyncResult, IDisposable
```

### async/await(Framework 4.5+)

#### Resource
- [ASP.NET 上的 Async/Await 简介](https://msdn.microsoft.com/zh-cn/magazine/dn802603.aspx)

### Expression Tree
>表达式树以树形数据结构表示代码，其中每一个节点都是一种表达式，比如方法调用和 x < y 这样的二元运算等。
#### Lambda 表达式创建表达式树
``` c#
Expression<Action<int>> actionExpression = n => Console.WriteLine(n);
Expression<Func<int, bool>> funcExpression1 = (n) => n < 0;
Expression<Func<int, int, bool>> funcExpression2 = (n, m) => n - m == 0;
```
#### Resource
- [表达式即编译器](http://www.infoq.com/cn/articles/expression-compiler)

### Iterators 迭代器
>迭代器可用于逐步迭代集合，例如列表和数组。迭代器方法或 `get` 访问器可对集合执行自定义迭代。 迭代器方法使用 `yield return` 语句返回元素，每次返回一个。 到达 `yield return` 语句时，会记住当前在代码中的位置。 下次调用迭代器函数时，将从该位置重新开始执行。 可以使用 `yield break` 语句来终止迭代。
``` c#
static void Main()  
{  
    foreach (int number in SomeNumbers())  
    {  
        Console.Write(number.ToString() + " ");  
    }  
    // Output: 3 5 8  
    Console.ReadKey();  
}  

public static System.Collections.IEnumerable SomeNumbers()  
{  
    yield return 3;  
    yield return 5;  
    yield return 8;  
}  
```
#### Syntax
- `yield return` 语句中必须存在从表达式类型到迭代器返回类型的隐式转换。
- 在 `C#` 中，迭代器方法不能有任何 `ref` 或 `out` 参数。
- 在 `C#` 中，“yield”不是保留字，只有在 `return` 或 `break` 关键字之前使用时才有特殊含义。 
#### 有限状态机（Finite State Machine）
- [为Linux应用构造有限状态机](https://www.ibm.com/developerworks/cn/linux/l-fsmachine/index.html)

### yield 语句
#### Syntax
``` c#
yield return <expression>;  
yield break;  
```
>不能在具有以下特点的方法中包含 yield return 或 yield break 语句：
- 匿名方法
- 包含不安全的块的方法
#### 异常处理
- 不能将 `yield return` 语句置于 try-catch 块中。 可将 `yield return` 语句置于 try-finally 语句的 try 块中。 
- 可将 `yield break` 语句置于 try 块或 catch 块中，但不能将其置于 finally 块中。
- 如果 foreach 主体（在迭代器方法之外）引发异常，则将执行迭代器方法中的 finally 块。 

