const vm = new Vue({
    el: '#main',
    data: {
        redText: 'text-red',
        isRed: true,
        isBold: false,
        classObj: {
            'text-red': true,
            'text-bold': false
        },
        isTextRed: true,
        textRedClass: 'text-red',
        textBoldClass: 'text-bold'
    },

    methods: {
        update01() {
            this.redText = 'text-green';
        },

        update02() {
            this.isRed = false;
            this.isBold = true;
        },

        update03() {
            this.isTextRed = false;
        }

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