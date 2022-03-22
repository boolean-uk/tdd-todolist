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

//############## Incomplete ##############################/
const prompt = require('prompt-sync')()

function instructions () {
    console.log('INSTRUCTIONS:')
    console.log('Type "create" followed by the task to add a new todo.')
    console.log('Type "all" to get the list of todos.')
    console.log('Type "complete" to get the list of completed todos.')
    console.log('Type "incomplete" to get the list of incompleted todos.')
    console.log('Type "todo" followed by an id to get a specific todo.')
    console.log('Type "done" followed by an id to set a specific todo complete.')
    console.log('Type "delete" followed by an id to remove a specific todo from the list.')
    console.log('Type "quit" to quit the program at any time.')
}

const name = prompt('What is your name?')
console.log(`Hey there ${name}`)
instructions()


let quit = false
while (!quit) {
    const input = prompt('What do you want to do?').toLowerCase()
    if (input === 'quit') {
        quit = true
    }
}
//############## Incomplete ##############################/

module.exports = TodoList
