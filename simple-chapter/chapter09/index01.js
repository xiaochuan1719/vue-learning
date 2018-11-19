Vue.component('button-counter', {
    props: ['title'],
    data: function () {
        return {
            count: 0
        }
    },

    template: '<button v-on:click="count++">You clicked {{ title }} {{ count }} times.</button>'
});

const vm = new Vue({
    el: '#main'
});
