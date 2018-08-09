## Computed Properties and Watchers

### Computed Properties 计算属性
模板里面使用表达式非常方便，但尤大大最初设计的初衷只是做一些简单的运算。如果模板中放入过多的逻辑，将会难以阅读和维护，如：  

```vue

<div id="example">
    {{ message.split('').reverse().join('') }}
</div>

```

所以，对于任何复杂的逻辑，都应当选择使用**计算属性**  


### #举个栗子  

```html

<div id="main">
    <P>Original message: "{{ message }}"</P>
    <p>Reverse message by computed: "{{ reverseMessage }}"</p>
    <p>Reverse message by methods: "{{ reverseWords() }}"</p>
</div>

```

```js

const vm = new Vue({
    el: '#main',

    data: {
        message: 'Hello'
    },

    // 这里声明了一个 reverseMessage 计算属性，提供的函数作为该属性的 getter 函数
    computed: {
        // a computed getter
        reverseMessage: function () {
            // 'this' points to the vm instance
            return this.message.split('').reverse().join('');
        },

        currentDate1: function () {
            return Date.now();
        }
    },
    
    // 这里声明了一个 reverseWords 的方法
    methods: {
        reverseWords: function () {
            return this.message.split('').reverse().join('');
        },

        currentDate2: function () {
            return Date.now();
        }
    },
    
    // 监听器
    watch: {
        // 监听 data 的 firstName 属性是否发生了变化，如果发生变化，则更新
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName;
        }
    }
});

// 除了使用 watch 选项来实现监听，vue 还提供了命令式 API，如：vm.$watch();
vm.$watch('lastName', function (val) {
    this.fullName = this.firstName + ' ' + val;
});

```

### Computed Properties and Methods 计算属性与方法

- 计算属性的执行时机：初始化时 / 相关属性发生改变时  
- **计算属性是基于它们的依赖（相关属性）进行缓存的**  
  1. 在控制台执行 vm.currentDate1 ,发现还是原来的值  
  2. 在控制台执行 vm.currentDate2 ,发现值改变了  

>我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A 。
如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。


### Computed Properties and Watcher 计算属性与监听器

Vue does provide a more generic way to observe and react to data changes on a Vue instance: watch properties.   


### Computed Setter 计算属性的setter

Computed properties are by default getter-only, but you can also provide a setter when you need it:

```js

const vm = new Vue({
    el: '#main',
    
    data: {
        firstName: '',
        lastName: ''
    },
    
    computed: {
        fullName: {
            get() {
                
            },
            
            set(newValue) {
                
            }
        }
    }
});

```
  



