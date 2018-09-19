## Form Input Bindings

### Basic Usage

`v-model` 指令：在表单 `<input>`、`<textarea>`、`<select>` 元素上创建双向数据绑定。 `v-model`指令本质上是一个语法糖，负责监听用户的输入事件以更新数据。

> `v-model`会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值，而总是将 Vue 实例的数据作为数据源，所以需要在组件的 `data` 选项中声明初始值。  

#### #Text and Multiline Text
> 注意，在 `<textarea>{{mesage}}</textarea>` 文本区域中插值不会生效，应使用 `v-model` 指令代替。
Interpolation on textareas (<textarea>{{text}}</textarea>) won't work. Use v-model instead.  

#### #Checkbox
Single checkbox, boolean value: (单个多选框，绑定到布尔值)
```html
<h3>3. Single Checkbox</h3>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

Multiple checkbox, bound to the same Array: (多个复选框，绑定到同一个数组)
```html

```