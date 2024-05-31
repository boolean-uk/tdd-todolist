class TodoItem {
    constructor(id,description) {
        this.id =id
        this.description = description
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
}

export { TodoItem, TodoList }
