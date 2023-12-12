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
    this.items.push({ id: this.items.length, description, complete: false })
    return true
  }
}



module.exports = { TodoList }
