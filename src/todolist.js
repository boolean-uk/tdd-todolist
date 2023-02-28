const todoList = [
    { id: 0, text: "create test codes", completed: true },
    { id: 1, text: "test the test codes", completed: false }
]

const createTodos = (id, text) => {
    const todo = {
        id: id,
        text: text,
        completed: false,
    };
    return todoList.push(todo)
}

function getAllTodos() {
    return todoList
}


let incompleteTodoList = []

function getIncompleteTodos() {
    // return todoList
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed === false) {
            incompleteTodoList.push(todoList[i])
        }
    }
    return incompleteTodoList
}

let completeTodoList = []
function getCompleteTodos() {
    // return todoList
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed === true) {
            completeTodoList.push(todoList[i])
        }
    }
    return completeTodoList
}

function toggleCompleted(id) {
    const target = todoList.find((todo) => todo.id === id)
    target.completed === false ?
        (target.completed = true)
        :
        (target.completed = false)
}

module.exports = {
    createTodos,
    getAllTodos,
    getIncompleteTodos,
    getCompleteTodos,
    toggleCompleted
}