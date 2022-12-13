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

  removeTodo(id) {
    const todoIndex = id - 1
    this.todos.splice(todoIndex, 1)
    return this.todos
  }
}

module.exports = {
  TodoList
}
