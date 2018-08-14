/**
 * Computed Properties and Methods
 * Computed Properties and Watchers
 * @author Hertz
 * @since 2018.08.10
 */
const vm = new Vue({
    el: '#main',

    data: {
        message: 'Hello',
        fullName: '',
        firstName: 'Jack',
        lastName: 'Chen',
        aVal: 100,
        bVal: 50
    },

    computed: {
        // a computed getter
        reverseMessage: function () {
            // 'this' points to the vm instance
            return this.message.split('').reverse().join('');
        },

        currentDate1: function () {
            return Date.now();
        },

        // a computed getter and setter
        fullNameTwo: {
            // computed the value of sum property
            get() {
                return this.firstName + ' ' + this.lastName;
            },

            // value 为 fullNameTwo 最最新属性值
            set(value) {
                const names = value.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }

        }

    },

    methods: {
        reverseWords: function () {
            return this.message.split('').reverse().join('');
        },

        currentDate2: function () {
            return Date.now();
        }
    },

    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName;
        }
    }
});

// 除了使用 watch 选项来实现监听，vue 还提供了命令式 API，如：vm.$watch();
vm.$watch('lastName', function (val) {
    this.fullName = this.firstName + ' ' + val;
});