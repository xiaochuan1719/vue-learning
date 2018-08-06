const vm = new Vue({
    el: '#main',
    data: {
        message: '数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值',
        en_message: 'The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces)',
        url_text: '<a href="https://vuejs.org/">https://vuejs.org/</a>',
        logo_imgUrl: 'https://vuejs.org/images/logo.png',
        tips: '00000'
    },
    methods: {
        alertGo() {
            alert("You clicked Link one~~~");
        },

        confirmGo(content) {
            alert('You clicked Link two~~~' + content);
        }
    }
});