class TodoList {
  constructor() {
    this.todos = []
  }

  newTodo(text) {
    const newTodo = {
      text: null
    }

    this.todos.push(newTodo)
  }
}

module.exports = {
  TodoList
}
