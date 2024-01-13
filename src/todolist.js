class TodoList {
  constructor() {
    this.todos = []
    this.currentId = 1
  }

  create(text) {
    const todo = new Todo(this.currentId++, text)
    this.todos.push(todo)
    return todo
  }

  getAll() {
    return this.todos
  }
}

class Todo {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.completed = false
  }
}

module.exports = {
  Todo,
  TodoList
}
