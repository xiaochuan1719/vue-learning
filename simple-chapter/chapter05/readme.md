## Conditional Rendering

### v-if
根据表达式的值的真假条件渲染元素。
在切换时元素及它的数据绑定/组件被销毁并重建。如果元素是 <template> ，将提出它的内容作为条件块。

当条件变化时该指令触发过渡效果。

当 v-for 与 v-if 一起使用时，v-for 的优先级高于 v-if 。

### 用**key**管理可复用的元素
Vue会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。给相同的元素都添加一个具有唯一值的 `key` 属性即可：  

```html
<template v-if="loginType === 'username'">
    <label>UserName</label>
    <input type="text" placeholder="Enter your username" key="username-input">
</template>
<template v-else>
    <label>Email</label>
    <input type="text" placeholder="Enter your email addr" key="email-input">
</template>

<button @click="toggleLoginType">Toggle login type</button>
```   

```js
const vm = new Vue({
    el: '#main',
    data: {
        loginType: 'username'
    },

    methods: {
        toggleLoginType () {
            this.loginType === 'username' ? this.loginType = 'email' : this.loginType = 'username';
        }
    }
});
```

如上代码所示，如果不添加 `key` 属性，则两个 input 元素为了更高效地渲染，会进行复用；如果添加了 `key` ，两个 input 元素将完全独立，不再复用。  


### v-show 指令

```html
<template v-show="isShow">
    <p>根据条件展示元素的选项</p>
    <p>不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。</p>
</template>

<button @click="toggleShow">Toggle Show</button>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        isShow: false
    },

    methods: {
        toggleShow () {
            this.isShow = !this.isShow;
        }
    }
});
```

点击按钮，页面内容并没有发生变化，这是由于 `v-show` 指令不支持 `<template>` 元素，且 `v-else` 也不支持 `<template>` 元素。  

```html
<div class="content" v-show="isShow">
    <p>根据条件展示元素的选项</p>
    <p>不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。</p>
</div>

<button @click="toggleShow">Toggle Show</button>
```

点击按钮，页面内容会隐藏显示交互变化。   

> **v-if 和 v-show 的区别**   
`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。  
`v-show` 简单地切换元素的 CSS 属性 display ；不管初始条件是什么，元素总是会被渲染
