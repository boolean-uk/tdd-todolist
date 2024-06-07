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
    complete(){
        let completedTasks = []
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].complete === true) {
                completedTasks.push(this.todos[i])
            }
        }

        if (completedTasks.length === 0) {
            completedTasks = "No tasks completed"

        }
        return completedTasks
    }
    incomplete(){
        let incompletedTasks = []
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].complete === false) {
                incompletedTasks.push(this.todos[i])
            }
        }

        if (incompletedTasks.length === 0) {
            incompletedTasks = "All tasks complete"

        }
        return incompletedTasks
    }
    search(id) {
        const task = this.todos.find((todo) => {return todo.id === id})
        if (task === undefined) {
            return "Task id doesn't exist"
        }

        return task
    }
    remove(id) {
        const task = this.todos.find((todo) => {return todo.id === id})
        if (task === undefined) {
            return "No task with this id"
        }
        this.todos.splice(task, 1)
    }
}

// const test = new ToDoList ()
// console.log(test.getToDoList())


export default ToDoList