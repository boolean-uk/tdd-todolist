class TodoList {

    todo = []

    completedTodo = {
        id: this.todo.length + 1,
        text: text,
        status: "completed"
    }
    incompleteTodo = {
        id: this.todo.length + 1,
        text: text,
        status: "incomplete"
    }

    create(text) {
        // const todoToCreate = {
        //     id: this.todos.length + 1,
        //     text: text,
        //     status: "incomplete"
        // };
        
        // this.todo.push(todoToCreate)
        if (todoToCreate.status = completed) {
            return this.completedTodo && this.todo.push(todoToCreate)
        } else if (todoToCreate.status = incomplete) {
            return this.incompleteTodo && this.todo.push(todoToCreate)
        }
        
        return todoToCreate
    }
}


module.exports = TodoList
