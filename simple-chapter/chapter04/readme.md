## Class and Style Bindings

class 和 style 绑定就是专门用来实现动态样式效果的技术


### Binding HTML Classes  绑定HTML class  

### #String Syntax

- v-bind:class='data属性'   
- data属性的属性值为类名   


### #Object Syntax

We can pass an object to v-bind:class to dynamically toggle classes:

```html
<div v-bind:class="{ active: isActive }"></div>
```

- v-bind:class=‘{xxx: boolVal, xxx: boolVal}';  
- 类名 xxx 的存在与否取决于数据属性 boolVal 的 Truthy;  
- 绑定的数据对象不必内联定义在模板里，如下所示：   
```html
  <div v-bind:class="classObject"></div>
```
```js
  new Vue({
    data: {
        classObject: {
          active: true,
          'text-danger': false
        }
      }
  });
```
- 绑定一个返回对象的计算属性；这是一个常用且强大的模式：  
```html
  <div v-bind:class="classObject"></div>
```
```js
  new Vue({
    data: {
        isRed: true,
        isBold: false
    },
    computed: {
        classObject: function () {
            return {
                'text-red': this.isRed && this.isBold,
                'text-bold': this.isRed && !this.isBold
            }
        }
    }
  });
```


### #Array Syntax

We can pass an array to v-bind:class to apply a list of classes:

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
- v-bind:class="[xxxx, xxxx]";   
- xxxx 为data选项属性，该属性值为 类名   
- 根据条件切换列表中的 class，可以用三元表达式   
```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```
- 当有多个条件 class 时，上述写法有些繁琐。所以在数组语法中也可以使用对象语法  
```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```


### Binding Inline Styles  绑定内联样式 

### #Object Syntax
```html
<div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>

<div :style="styleObj"></div>

```
```js
new Vue({
    el: '',
    data: {
        textColor: 'red',
        fontSize: 20,
        styleObj: {
            textColor: 'green',
            fontSize: '30px'
        }
    }
});
```

- CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名  
- 直接绑定到一个样式对象通常更好，使得模板简洁清晰；该对象属性及CSS属性名，可以使用驼峰式和kebab-case式  
- 对象语法常常结合返回对象的计算属性使用  


### #Array Syntax  
v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上

```html
<div :style="[baseStyles, overridingStyles]"></div>
```

