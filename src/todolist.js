class TodoList {
  constructor() {
    this.toDoArray = []
  }

  create(todo) {
    const toDoItem = {
      id: this.toDoArray.length + 1,
      text: todo,
      status: 'incomplete'
    }
    this.toDoArray.push(toDoItem)
    return toDoItem
  }

  getAll() {
    return this.toDoArray
  }

  setComplete(id) {
    const newArray = this.toDoArray.filter((item) => item.id === id)
    const target = newArray[0]
    target.status = 'complete'
    return target
  }
}
module.exports = { TodoList }
