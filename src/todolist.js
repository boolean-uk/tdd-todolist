class TodoList {
  constructor() {
    this.todos = []
    this.nextId = 1
  }

  create(text) {
    const todo = {
      id: this.nextId++,
      text,
      status: 'incomplete'
    }
    this.todos.push(todo)
    return todo
  }

  getAll() {
    return this.todos
  }

  setComplete(id) {
    const todo = this.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.status = 'complete'
      return todo
    } else {
      return 'Todo item not found'
    }
  }

  getIncomplete() {
    return this.todos.filter((todo) => todo.status === 'incomplete')
  }

  getComplete() {
    return this.todos.filter((todo) => todo.status === 'complete')
  }

  searchById(id) {
    const todo = this.todos.find((todo) => todo.id === id)
    return todo || 'Todo item not found'
  }

  removeById(id) {
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      this.todos.splice(index, 1)
      return 'Todo item removed'
    } else {
      return 'Todo item not found'
    }
  }
}

module.exports = TodoList
