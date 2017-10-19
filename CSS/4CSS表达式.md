### `attr()`
用来获取选择到的元素的某一HTML属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。引用[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)

> 语法: attr( `attribute-name` <`type-or-unit`>? [, <`fallback`> ]? )

- `attribute-name`
是CSS所引用的HTML属性名称。
- <`type-or-unit`>
表示所引用的属性值的单位。如果该单位相对于所引用的属性值不合法，那么`attr()`表达式也不合法。若省略，则默认值为`string`。
- <`fallback`>  如果`HTML`元素缺少所规定的属性值或属性值不合法，则使用`fallback`值。该值必须合法，且不能包含另一个`attr()`表达式。