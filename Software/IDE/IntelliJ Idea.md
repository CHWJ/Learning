# 目录
- [目录](#目录)
  - [普通 `java` 工程转为 `maven` 工程](#普通-java-工程转为-maven-工程)
  - [快捷键](#快捷键)
  - [查看断点](#查看断点)

## 普通 `java` 工程转为 `maven` 工程

- 项目 | 右键菜单 | Add Framework Support | 选择maven

## 快捷键

| 用途                | 快捷键            | 备注         |
| ------------------- | ----------------- | ------------ |
| 展开项目所有文件夹  | NumPad *          |              |
| 打开全局设置        | Ctrl+Alt+S        |              |
| 包裹代码块          | Ctrl+Alt+T        |              |
| 搜索并跳转到Classes | Ctrl+N            |              |
| 搜索并跳转到文件    | Ctrl+Shift+N      |              |
|                     | Ctrl+Shift+F      | Find in Path |
| 重载所有文件        | Ctrl+Alt+Y        |              |
| 查看断点            | Ctrl+Shift+F8     |              |
| 查找引用            | Alt+F7            |              |
| 查看变量值          | Alt+F8            |              |
| 跳转到上次光标位置  | Ctrl+Alt+左方向键 |              |
| 跳转到下次光标位置  | Ctrl+Alt+右方向键 |              |

## 查看断点

- 添加`java.lang.NullPointerException`
- `Suspend`选择`Thread`
- `Class filters`
  - `Include`
    - 输入模式`com.ipop.*`
  - `Exclude`
    - 添加想要排除的类
      - `com.ipop.common.core.util.SpringUtil`