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

** v-text 和 v-html **

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

** v-bind 指令 **

```

<!-- v-bind 指令 -->
<p>Vue logo: <img v-bind:src="logo_imgUrl" alt="" width="50px" height="50px"></p>
<p>Vue logo: <img :src="logo_imgUrl" alt="" width="50px" height="50px"></p>

```

** v-on 指令 **

```

<!-- v-on 指令 -->
<a href="#" v-on:click="alertGo">Link one</a>
<br>
<a href="#" @click="confirmGo(tips)">Link two</a>

```
