class ToDoList {
    constructor() {
        this.todos = []
    }
    createToDo(value) {
        const length = this.todos.length
        const toDo = {id: length + 1, task: value, complete: false}
        this.todos.push(toDo)
    }
    getToDoList() {
        return this.todos
    }
}

// const test = new ToDoList ()
// console.log(test.getToDoList())


export default ToDoList