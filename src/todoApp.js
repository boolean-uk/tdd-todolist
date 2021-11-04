const todoApp = { 

    // if for keeping track of each object valule
    id : 0,

    todos: [],

    create : function (text) { 

        this.id++ // incrementing the value 

        const todo = {
            id: this.id,
            text: text,
            status : "incomplete"
        }

        this.todos.push(todo)
        return todo
    }, 

    showAll: function() { 
        return this.todos
    }

}

module.exports = todoApp