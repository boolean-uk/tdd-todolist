class ToDoList {
    constructor() {
        this.todos = []
    }
    createToDo(value) {
        if (value === "") {
            return "task needs at least one character"
        } 
        if (typeof value !== "string") {
            return "task must be a string"
        }
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