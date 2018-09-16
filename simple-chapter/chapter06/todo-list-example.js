/**
 * TodoList item 组件
 * 任务列表组件
 */
Vue.component('todo-item', {
    template: `
        <li>
            {{ title }}  
            <a href="#" v-on:click="$emit('remove')">   X</a>
        </li>
    `,
    props: ['title']
});


const vm = new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {id: 1, title: 'Feed the Cats'},
            {id: 2, title: 'Read a book'},
            {id: 3, title: 'Thinking my lover'}
        ],
        nextTodoId: 4
    },

    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});