const vm = new Vue({
    el: '#main',
    data: {
        nameText: '',
        message: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: '',
        multiSelected: [],
        selectedOption: 'A',
        options: [
            { text: 'Character A', value: 'A' },
            { text: 'Character B', value: 'B' },
            { text: 'Character C', value: 'C' }
        ]
    }
});