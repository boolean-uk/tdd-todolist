class TodoList {
    constructor() {
        this.toDoArray = []
    }

    create(todo) {
        const toDoItem = {
            id: this.toDoArray.length + 1,
            text: todo,
            status: 'incomplete'
        }
        this.toDoArray.push(toDoItem)
        return toDoItem
    }

    getAll() {
        return this.toDoArray
    }

    setComplete(id) {
        const newArray = this.toDoArray.filter((item) => item.id === id)
        const target = newArray[0]
        target.status = 'complete'
        return target
    }

    getIncomplete() {
        const newArray = this.toDoArray.filter((item) => item.status === 'incomplete')
        return newArray
    }
    getComplete() {
        const newArray = this.toDoArray.filter((item) => item.status === 'complete')
        return newArray
    }
    search(id) {
        const newArray = this.toDoArray.filter((item) => item.id === id)
        const target = newArray[0]
        return target
    }
    remove(id) {
        for (let i = 0; i < this.toDoArray.length; i++) {
            if (this.toDoArray.id === id) {
                this.toDoArray.splice(i)
            }
        }
        return `task of id ${id} has been deleted`
    }
}
module.exports = { TodoList }
