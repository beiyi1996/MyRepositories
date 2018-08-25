var app = new Vue({
    el: '.app',
    data: {
        todos: [],
        newtodo: '',
        complatedtodos: [],
        isComplatedShow:false,
        isAllShow:true,
        isActiveShow:false,
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({
                title: todo,
                complated: false
            });
            this.newtodo = '';
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        complatedTodo: function (todo) {
            this.complatedtodos.push(todo);
        },
    }
});
