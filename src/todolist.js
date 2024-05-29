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
}

export { TodosList, Todo }
