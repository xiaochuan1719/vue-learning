const vm = new Vue({
    el: '#main',
    data: {
        loginType: 'username'
    },

    methods: {
        toggleLoginType () {
            this.loginType === 'username' ? this.loginType = 'email' : this.loginType = 'username';
        }
    }
});