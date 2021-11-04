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
    },

    setCompleted: function(id){

        // const incomplete = todos.map((todo) => todo.status === "incomplete")

        const todo = this.todos.find(todo => todo.id )

        todo.status = "complete"

        // console.log("incomplete: ",incomplete)
        // return incomplete

        return todo
    }, 

}

module.exports = todoApp