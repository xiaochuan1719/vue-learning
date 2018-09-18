## Event Handling

### Listening to Events
`v-on` 指令可以监听 DOM 事件，并在触发时执行相关逻辑代码。

```html
<div id="example-01">
    <button v-on:click="counter += 1">Add +1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        counter: 0
    }
});
```

- 直接绑定一个方法
```html
<div id="example-02">
    <button v-on:click="addCounter"> Add +2 </button>
    <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        counter: 0
    }, 
    methods: {
        addCounter: function () {
            this.counter += 2;
        }
    }
});
```

- 在内联 javascript 语句中调用方法
```html
<div id="example-03">
    <button v-on:click="showEventButton">Click It</button>
    <button v-on:click="say('Hi', $event)">Say Hi</button>
</div>
```

```js
const vm = new Vue({
    el: '#main',
    data: {
        counter: 0
    }, 
    methods: {
        showEventButton: function (event) {
            alert('the counter = ' + this.counter);
            if (event) {
                alert('this tag name: ' + event.target.tagName);  // BUTTON
            }
        },

        say: function (message, event) {
            alert(message);
            if (event) {
                alert('this tag name: ' + event.target.tagName);
            }
        }
    }
});
```

### Event Modifiers  事件修饰符



### Key Modifiers  按键修饰符


### System Modifier Keys  系统修饰按键