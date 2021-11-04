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
        // console.log("todo: ", todo)
        // console.log("this.todos: ", this.todos)
        return todo
    }, 

    showAll: function() { 
        return this.todos
    },

    setCompleted: function(id){

        const todo = this.todos.find(todo => todo.id )

        todo.status = "complete"

        return todo
    }, 

    showIncompleted : function() {

        this.setCompleted(this.todos[1].id) // using the setCompleted function to set the status of the 1st todo to complete
        // console.log("todos: ", this.todos )
        const incomplete = this.todos.filter(todo => todo.status === "incomplete")
        
        console.log("incomplete: ", incomplete)
        return incomplete
        // return this.todos.filter(todo => todo.status === "incomplete") optimised version
    }, 

    remove: function(id) {

        const index = this.todos.find(todo => todo.id === id) // find the index of the todo

        this.todos.splice(index, 1) // splice/remove the todo from the array

        return this.todos // return the updated array
    }

}

module.exports = todoApp