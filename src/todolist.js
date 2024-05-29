class Todo {
  constructor(id, text, status) {
    this.id = id
    this.text = text
    this.status = status
  }
}
class TodosList {
  constructor() {
    this.todosList = []
  }

  add(todo) {
    this.todosList.push(todo)
    return this.todosList
  }
}

export { TodosList, Todo }
