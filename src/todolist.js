class TodoList {
  constructor() {
    this.todos = []
  }

  create(title) {
    const newId = this.todos.length + 1

    const newTodo = {
      id: newId,
      title: title,
      status: 'incomplete'
    }

    this.todos.push(newTodo)

    return newTodo
  }

  getAll() {
    return this.todos
  }
}

module.exports = TodoList
