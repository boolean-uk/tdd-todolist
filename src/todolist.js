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

  add(todo) {
    this.todos.push(todo)
    return this.todos
  }
}

export { TodoItem, TodoList }
