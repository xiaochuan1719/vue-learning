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


### 对象更改检测注意事项

**Vue 不能检测对象属性的添加或删除**  

对于已经创建的 Vue 实例，Vue 不能动态添加根级别的响应式属性。但可以使用 `Vue.set(object, key, value)` 方法向嵌套对象添加响应式属性。
```js
const vm = new Vue({
    data: {
        userProfile: {
            name: 'Anna'
        }
    }
});


// 嵌套对象 userProfile 中添加一个新的 age 属性
Vue.set(vm.userProfile, 'age', 20);
vm.$set(vm.userProfile, 'age', 18);

// 如果要添加多个新的响应式属性，直接通过 Object.assign(object, newObj) 是不行的，你应该这样做：
vm.userProfile = Object.assign(vm.userProfile, {
   age: 18,
   favoriteColor: 'red, green' 
});


```


### 显示过滤/排序结果

需求：显示一个过滤或排序后的数组，而不实际改变或重置原始数据  
方案：创建返回过滤或排序数组的计算属性和方法  

```html
<li v-for="num in evenNumbers">{{ num }}</li>
<li v-for="num in even(numbers)">{{ num }}</li>
```
```js
const vm = new Vue({
    el: '#main',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0;
            })
        }
    },
    
    methods: {
        even: function(numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0;
            });
        }
    }
});
```


### v-for with a Range
`v-for` can also take an integer. In this case it will repeat the template that many times.

```html
<div>
    <span v-for="n in 10">{{ n }}</span>
</div>
```

### v-for on a <template>
Similar to template `v-if`, you can also use a `<template>` tag with `v-for` to render a block of multiple elements.

```html
<ul>
    <template v-for="item of items">
        <li>{{ item.msg }}</li>
        <li class="divider" role="presentation"></li>
    </template>
</ul>
``` 


### v-for with v-if
When they exist on the same node,  `v-for` has a higher priority than `v-if` .That means the `v-if` will be run on each iteration of the loop separately.

```html
// the example only renders the todos that are not complete
<li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo.msg }}
</li>
```



















