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
<div id="example-04">
    <h3>3. Multiple Checkbox</h3>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked Names: {{ checkedNames }}</span>
</div>
```

#### #Radio 


#### #Select


### Value Bindings
对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串（对于复选框也可以是布尔值）:  

```html

<!-- 当选中是，picked 为字符串 ‘a’ -->
<input type="radio" v-model="picked" value="a">

<!-- toggle 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，selected 为字符串 ’aaa‘ -->
<select v-model="selected">
    <option value=aaa">AAA</option>
</select>

```

但有时我们可能需要把值绑定到 Vue 实例的一个动态属性上，这时可以用 `v-bind` 实现，且这个属性可以不是字符串。  


### Modifiers

#### #.lazy
默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步  
添加 `laze` 修饰符，从而转变为使用 `change` 事件进行同步（失去焦点时）
```html
<input v-model.lazy="msg" >
```

#### #.number

#### #.trim