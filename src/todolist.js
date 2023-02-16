class ToDoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str) {
    this.id++
    const item = { id: this.id, task: str, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  getAll() {
    return this.items
  }
}

// get all complete
// get all incomplete
// complete task
// search byId
// remove byId

module.exports = ToDoList
