const vm = new Vue({
    el: '#main',
    data: {
        counter: 0
    },

    methods: {
        addCounter: function () {
            this.counter += 2;
        },

        showEventButton: function (event) {
            alert('the counter = ' + this.counter);
            if (event) {
                alert('this tag name: ' + event.target.tagName);  // BUTTON
            }
        },

        say: function (message, event) {
            alert(message);
            if (event) {
                alert('this tag name: ' + event.target.tagName);
            }
        }
    }

});