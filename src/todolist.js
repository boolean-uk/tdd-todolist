class TodoItem {
  constructor(id, todo, status = false) {
    this.id = id
    this.todo = todo
    this.status = status
  }
}

class TodoList {
  constructor() {
    this.todos = []
  }
}

export { TodoItem, TodoList }
