const vm = new Vue({
    el: '#main',
    data: {
        isShow: false,
        styleObj: {
            color: 'red',
            fontWeight: 'Bold'
        }
    },

    methods: {
        toggleShow () {
            this.isShow = !this.isShow;
        }
    }
});