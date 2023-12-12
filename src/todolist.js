class TodoList {
  constructor(title) {
    this.title = title || 'untitled'
    this.items = []
  }

  getAll() {
    return this.items
  }

  create(description) {
    if (!description) return false
    const newItem = { id: this.items.length + 1, description, complete: false }
    this.items.push(newItem)
    return newItem
  }

  setComplete(id) {
    const itemExists = !!this.items.find((item) => item.id === id)
    if (!itemExists) return 'Todo item not found'
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: true
        }
      } else {
        return item
      }
    })
    return this.items.find((item) => item.id === id)
  }
}

module.exports = { TodoList }
