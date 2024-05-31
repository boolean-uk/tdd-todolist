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

    getItemById(id) {
        const item = this.items.find(item => item.id === id)
        return item || { message: "Item not found" }
    }

    removeItemById(id) {
        const index = this.items.findIndex(item => item.id === id)
        if (index !== -1) {
            this.items.splice(index, 1)
            return { message: "Item removed successfully" }
        }
        return { message: "Item not found" }
    }

}

export { TodoItem, TodoList }
