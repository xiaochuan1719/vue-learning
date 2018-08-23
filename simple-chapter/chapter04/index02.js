/**
 * - CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名
 * - 直接绑定到一个样式对象通常更好，使得模板简洁清晰；该对象属性及CSS属性名，可以使用驼峰式和kebab-case式
 * - 对象语法常常结合返回对象的计算属性使用
 */
const vm = new Vue({
    el: '#main',
    data: {
        bgColor: 'green',
        textColor: 'red',
        fontSize: 20,
        styleObject: {
            backgroundColor: 'yellow',
            color: '#000',
            fontSize: '30px'
        }
    }
});
