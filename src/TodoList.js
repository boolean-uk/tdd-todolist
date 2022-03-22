class TodoList {
    constructor () {
        this.id = 1
        this.todos = []
    }
    
    create (text) {
        const newTodo = {
            id: this.id,
            text: text,
            status: "incomplete"
        }
        this.todos.push(newTodo)
        this.id++

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
        return this.todos.filter((todo) => todo['status'] === 'incomplete')
    }

    getComplete () {
        return this.todos.filter((todo) => todo['status'] === 'complete')
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

const todoList = new TodoList()

function instructions () {
    console.log('')
    console.log('INSTRUCTIONS:')
    console.log('Type "create" to add a new todo.')
    console.log('Type "all" to get the list of todos.')
    console.log('Type "complete" to get the list of completed todos.')
    console.log('Type "incomplete" to get the list of incompleted todos.')
    console.log('Type "todo" to get a specific todo.')
    console.log('Type "done" to set a specific todo complete.')
    console.log('Type "delete" to remove a specific todo from the list.')
    console.log('Type "quit" to quit the program at any time.')
    console.log('')
}

const name = prompt('What is your name?')
console.log(`Hey there ${name}`)
instructions()


let quit = false
while (!quit) {
    const input = prompt('What do you want to do?').trim().toLowerCase()

    if (input === 'quit') {
        quit = true
    }

    if (input === 'create') {
        const text = prompt('What do you want to add?')
        todoList.create(text)
        console.log('Todo added to list.')
        console.log('')
    }

    if (input === 'all') {
        console.log(todoList.getAllTodos())
        console.log('')
    }

    if (input === 'complete') {
        console.log(todoList.getComplete())
        console.log('')
    }

    if (input === 'incomplete') {
        console.log(todoList.getIncomplete())
        console.log('')
    }

    if (input === 'todo') {
        const wantedTodo = parseInt(prompt('Which todo are you looking for? (id)'))
        console.log(todoList.getTodo(wantedTodo))
        console.log('')
    }

    if (input === 'done') {
        const completeTodo = parseInt(prompt('Which todo did you complete? (id)'))
        console.log(todoList.setTodoComplete(completeTodo))
        console.log('')
    }

    if (input === 'delete') {
        const removeTodo = parseInt(prompt('Which todo do you want to remove? (id)'))
        console.log(todoList.removeTodo(removeTodo))
        console.log('')
    }
}
//############## Incomplete ##############################/

module.exports = TodoList
