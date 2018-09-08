const vm = new Vue({
    el: '#main',
    data: {
        items: [
            'Vue', 'React', 'Angular', 'Inferno', 'Preact', 'Dva', 'Nerv', 'Taro'
        ]
    },
    methods: {
        updateArrByReverse () {
            this.items.reverse();
        },

        updateArrBySort () {
            this.items.sort();
        }

    }
});
