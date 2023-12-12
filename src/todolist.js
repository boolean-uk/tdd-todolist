class TodoList {
  constructor(title) {
    this.title = title || 'untitled'
    this.items = []
  }

  getTodos() {
    return this.items
  }

  create(description) {
    if (!description) return false
    const newItem = { id: this.items.length, description, complete: false }
    this.items.push(newItem)
    return true
  }

  setComplete(id) {
    const itemExists = !!this.items.find((item) => item.id === id)
    if (!itemExists) return false
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
    return true
  }
}

module.exports = { TodoList }
