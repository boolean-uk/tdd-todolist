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
  // create new task
}

// complete
// get
// search
// remove

module.exports = ToDoList
