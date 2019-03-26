/**
 * MVP 模式
 * M：Model模型层，比如ajax请求数据
 * V：View视图
 * P：Presenter控制器，处理数据逻辑
 *
 * 通过jQuery方式实现  面向对象编程
 * @constructor
 */
function Page() {}

$.extend(Page.prototype, {
    init: function() {
        this.bindEvent();
    },

    bindEvent: function() {
        let btn = $('#btn');
        btn.on('click', $.proxy(this.handleBtnClick, this));
    },

    handleBtnClick: function() {
        let inputElem = $('#input');
        let inputValue = inputElem.val();
        let ulElem = $('#list');
        ulElem.append('<li>' + inputValue + '</li>');
        inputElem.val('');
    }
});

const page = new Page();
page.init();
