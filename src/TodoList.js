class TodoList {
    todos = []
    
    create (text) {
        const newTodo = {
            id: this.todos.length + 1,
            text: text,
            status: "incomplete"
        }
        this.todos.push(newTodo)

        return newTodo
    }

    getAllTodos () {
        return this.todos
    }

    getTodo (id) {
        for (const todo of this.todos) {
            if (todo['id'] === id) {
                return todo
            }
        }
        return `There is no todo with id: ${id}.`
    }

    getIncomplete () {
        const incomplete = []
        for (const todo of this.todos) {
            if (todo['status'] === 'incomplete') {
                incomplete.push(todo)
            }
        }
        return incomplete
    }

    getComplete () {
        const complete = []
        for (const todo of this.todos) {
            if (todo['status'] === 'complete') {
                complete.push(todo)
            }
        }
        return complete
    }

    setTodoComplete (id) {
        for (const todo of this.todos) {
            if (todo['id'] === id) {
                todo['status'] = 'complete'
                return todo
            }
        }
        return `There is no todo with id: ${id}.`
    }

    removeTodo (id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i]['id'] === id) {
                this.todos.splice(i, 1)
                return this.todos
            }
        }
        return `There is no todo with id: ${id}.`
    }
}

module.exports = TodoList
