class TodoItem {
    constructor(id,description) {
        this.id =id
        this.description = description
        this.isCompleted = false
    }

    setCompleted() {
        this.isCompleted = true
    }

    setIncomplete() {
        this.isCompleted = false
    }
}

class TodoList {
    constructor() {
        this.items = []
    }

    addTodoItem(id, description) {
        const newItem = new TodoItem(id, description)
        this.items.push(newItem)
        return newItem
    }

    getAllItems() {
        return this.items
    }

    getIncompleteItems() {
        return this.items.filter(item => !item.isCompleted)
    }

    getCompleteItems() {
        return this.items.filter(item => item.isCompleted)
    }

}

export { TodoItem, TodoList }
