class TodoItem {
  constructor(id, todo, status) {
    this.id = id
    this.todo = todo
    this.status = status
  }

  setComplete(status) {
    this.todo.status = 'incomplete'
    if (!status) {
      this.todo.status = 'complete'
    }
    return this.todo
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
