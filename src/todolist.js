const { check } = require('prettier')

class TodoList {
  constructor() {
    this.todos = []
  }

  newTodo(text) {
    if (!text || text === '') return false

    const newId = this.todos.length + 1
    const newTodo = {
      id: newId,
      text: text,
      checked: false
    }

    this.todos.push(newTodo)
    return newTodo
  }

  getAllTodos() {
    return this.todos
  }

  updateTodo(id, checked) {
    const todoIndex = id - 1
    this.todos[todoIndex].checked = checked
  }

  removeTodo(id) {
    const todoIndex = id - 1
    if (this.todos[todoIndex] === undefined) return false

    this.todos.splice(todoIndex, 1)
    return this.todos
  }
}

module.exports = {
  TodoList
}
