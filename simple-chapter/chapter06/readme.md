## List Rendering

### Mapping an Array to Elements with v-for

```html
<h3>1. 用 v-for 把一个数组对应为一组元素</h3>
<ul id="example01">
    <h4>JavaScript Framework</h4>
    <li v-for="item in jsFrameworkArr">
        {{ item.framework_name }}
    </li>
</ul>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        jsFrameworkArr: [
            { framework_name: 'Angular' },
            { framework_name: 'Vue' },
            { framework_name: 'React' },
            { framework_name: 'Preact' },
            { framework_name: 'Inferno'},
            { framework_name: 'Nerv' },
            { framework_name: 'dva' }
        ]
    }
});
```

> 在 `v-for` 块中，我们拥有对父作用域属性的完全访问权限；  
> 除了使用 `item in items` 形式语法外，也支持使用 `item of items` 形式的语法；   
> `v-for` 还支持一个可选的第二个参数为当前项的索引；  
