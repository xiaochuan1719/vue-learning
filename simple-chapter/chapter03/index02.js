/**
 * watcher example
 * @author Hertz
 * @since 2018.08.15
 */
const watchExampleVM = new Vue({

    el: '#watch-example',

    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },

    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.debouncedGetAnswer();
        }
    },

    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },

    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)';
                return ;
            }

            this.answer = 'Thinking';

            let vm = this;

            axios.get('https://yesno.wtf/api').then(function (response) {
                vm.answer = _.capitalize(response.data.answer);
            }).catch(function (error) {
                vm.answer = 'Error! Could not reach the API.' + error;
            });
        }

    }

});