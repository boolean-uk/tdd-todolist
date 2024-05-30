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
    setComplete(id) {
        let task = undefined
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                task = this.todos[i]
                task.complete = true
            }
        }
        if (task === undefined) {
            return "to do id doesn't exist"
        }
    }
}

// const test = new ToDoList ()
// console.log(test.getToDoList())


export default ToDoList