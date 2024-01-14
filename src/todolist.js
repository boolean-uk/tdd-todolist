class Todo {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.completed = false
  }
}

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

  setCompletedById(id) {
    const todo = this.todos.find((t) => t.id === id)
    if (todo) {
      todo.completed = true
    }
  }

  removeById(id) {
    const index = this.todos.findIndex((t) => t.id === id)
    if (index !== -1) {
      this.todos.splice(index, 1)
    }
  }

  getById(id) {
    const todo = this.todos.find((t) => t.id === id)
    return todo || 'Todo not found'
  }

  getAll() {
    return this.todos
  }

  getIncomplete() {
    return this.todos.filter((todo) => !todo.completed)
  }

  getComplete() {
    return this.todos.filter((todo) => todo.completed)
  }
}

module.exports = {
  Todo,
  TodoList
}
