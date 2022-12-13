class TodoList {
  constructor() {
    this.items = []
    this.id = 0
  }

  create(title) {
    this.id++
    const item = { text: title, id: this.id, status: 'incomplete' }
    this.items.push(item)
    return item
  }
}

module.exports = TodoList
