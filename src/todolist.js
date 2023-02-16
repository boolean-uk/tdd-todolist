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

  comlplete(id) {
    const found = this.items.find((todo) => todo.id === this.items.id)
    if (!found) return 'a task with this id does not exist'
  }

  getAllComplete() {}
  getAllIncomplet() {}
  searchById() {}
  removeById() {}
}

module.exports = ToDoList
