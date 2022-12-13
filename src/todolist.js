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

  getIncompleteTodos() {
    const incompleteList = this.todos.filter((todo) => !todo.checked)
    return incompleteList
  }

  getCompleteTodos() {
    const completeList = this.todos.filter((todo) => todo.checked)
    return completeList
  }

  updateTodo(id, checked) {
    const todoIndex = id - 1
    if (this.todos[todoIndex] === undefined) return false
    if (typeof checked !== 'boolean') return false

    this.todos[todoIndex].checked = checked
  }

  searchById(id) {
    const todoIndex = id - 1
    if (this.todos[todoIndex] === undefined) return false
    return this.todos[todoIndex]
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
