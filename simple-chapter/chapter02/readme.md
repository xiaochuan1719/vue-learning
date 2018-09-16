## Template Syntax

### Interpolations 插值

#### Text 文本

- Mustache 语法

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
```

<p>Message: {{ message }}</p>

<p>Message: {{ message.toUpperCase() }}</p>

```

- Vue 指令

**v-text 和 v-html**

```

<p v-html="message"></p>
<p v-text="data"></p>

// vue 实例
const vm = new Vue({

    el: '#main',
    data: {
        message: '<a href="https://vuejs.org/">https://vuejs.org/</a>'
    }

});


```

**v-cloak 和 v-text指令**
v-cloak 独立指令，不需要表达式。这个指令保持在元素上直到关联实例结束编译。   
常和 CSS 规则： `[v-cloak]{display: none;}` 一起使用，可以隐藏未编译的 Mustache 标签直到实例结束编译。可以解决使用 Mustache 标签插值时的闪烁问题。（配合CSS规则，可以实现很多的效果哦！！）   

```css
[v-cloak] {
    display: none;

}
```
```html
<span v-cloak>{{ message }}</span>
```


v-text 需要表达式，默认是没有插值闪烁问题的，且会覆盖元素里面所有的内容；而使用插值表达式，则只会覆盖表达式部分的内容。



**v-bind 指令**

```

<!-- v-bind 指令 -->
<p>Vue logo: <img v-bind:src="logo_imgUrl" alt="" width="50px" height="50px"></p>
<p>Vue logo: <img :src="logo_imgUrl" alt="" width="50px" height="50px"></p>

```

**v-on 指令**

```

<!-- v-on 指令 -->
<a href="#" v-on:click="alertGo">Link one</a>
<br>
<a href="#" @click="confirmGo(tips)">Link two</a>

```
