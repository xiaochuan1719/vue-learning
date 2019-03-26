/**
 * MVVM 模式
 * M：Model模型层，比如ajax请求数据
 * V：View视图
 * VM：
 *
 * 通过Vue方式实现
 */
const vm = new Vue({
    el: '#main',
    data: {
        inputValue: '',
        list: []
    },
    methods: {
        handleBtnClick: function() {
            this.list.push(this.inputValue);
            this.inputValue = '';
        }
    }
});