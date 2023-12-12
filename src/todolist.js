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

  toggleComplete(id) {
    const lastId = this.items.slice(-1).id
    if (id >= lastId) return false
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      } else {
        return item
      }
    })
    return true
  }
}

module.exports = { TodoList }
