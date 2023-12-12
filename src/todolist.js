class TodoList {
  constructor(title) {
    this.title = title || 'untitled'
    this.items = []
  }

  getTodos() {
    return this.items
  }

  createTodo(description) {
    if (!description) return false
    const newItem = { id: this.items.length, description, complete: false }
    this.items.push(newItem)
    return true
  }
}



module.exports = { TodoList }
