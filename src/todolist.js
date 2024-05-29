class Todo {
  constructor(id, text, status) {
    this.id = id
    this.text = text
    this.status = status
  }
}
class Todos {
  constructor() {
    this.todos = []
  }
}

export { Todos, Todo }
