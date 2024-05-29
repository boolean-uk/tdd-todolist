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

  search(id) {
    return Boolean(this.todosList.find((todo) => todo.id === id))
  }
}

export { TodosList, Todo }
