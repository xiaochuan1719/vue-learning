## Components Baseic

```js
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },

    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

const vm = new Vue({
    el: '#main'
});

```

```html
<div id="component-example-01">
    <button-counter></button-counter>
</div>
```

#### #data 必须是一个函数

```vuejs
// data 选项必须是一个函数
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },

    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
```

#### #通过Prop向子组件传递数据  

```vuejs
Vue.component('button-counter', {
    props: ['title'],
    template: '<button v-on:click="count++">You clicked {{ title }} {{ count }} times.</button>'
});
```

#### #每个组件必须只有一个根元素  


#### #通过事件向父级组件发送消息 


