## List Rendering

### Mapping an Array to Elements with `v-for`

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

```html
<h4>Java Framework</h4>
<ul id="example02">
    <li v-for="(item, index) of javaFrameworkArr">
        {{ index + 1 }} > {{ item.name }}
    </li>
</ul>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        javaFrameworkArr: [
            { name: 'Spring' },
            { name: 'SpringBoot' },
            { name: 'SpringCloud' },
            { name: 'SpringData' }
        ]
    }
});
```

### `v-for` with an Object

基本格式： v-for="(value, key, index) in object"  

```html
<h3>1. v-for 迭代一个对象 </h3>
<h4>JavaScript Framework</h4>
<ul id="example01">
    <li v-for="(value, key, index) in exampleObj">
        {{ index }} 、 {{ key }}: {{ value }}
    </li>
</ul>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        exampleObj: {
            name: 'vue.js',
            desc: 'The Progressive JavaScript Framework',
            version: '2.5.17',
            author: '尤雨溪'
        }
    }
});
```

> 在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。  
> 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。  
> 这个默认的模式是高效的，但是只适用于**不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。  


### 数组更新检测

#### #编译方法
Vue 包含一组观察数组的变异方法，它们会触发视图更新。  
- push()  
- pop()  
- shift()  
- unshift()  
- splice()  
- sort()  
- reverse()  

#### #替换数组 
变异方法（mutation method），会改变调用这些方法的原始数组。   
非变异方法（non-mutation method）方法，如：filter(), concat(), slice() ；这些不会改变原始数组，但总会返回一个新的数组。  
当使用非变异方法时，可以用新数组替换旧数组： 
```js
example.items = example.items.filter(function(item) {
    return item.message.match(/Foo/);
});
```

#### #注意事项
由于 JS 的限制，Vue 不能检测以下变动的数组：  
1. 利用索引直接设置一个项时，如: `vm.items[indexOfItem] = newValue`  
2. 修改数组长度时，如: `vm.items.length = newLength`  

举个栗子：
```js
const vm = new Vue({
    el: '#example'
    data: {
        items: ['a', 'b', 'c']
    }
});

vm.items[1] = 'x';
vm.items.length = 5;

// 以上均不会响应触发视图的更新

```

解决方案：  
1. 解决第一类问题  
```js
// Vue.set()
Vue.set(vm.items, indexOfItem, newValue);

vm.$set(vm.items, indexOfItem, newValue);

// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue);

```
2. 解决第二类问题  
```js
vm.items.splice(newLength);
```


