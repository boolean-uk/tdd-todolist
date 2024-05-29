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

  setComplete(id) {
    const todoId = this.todos.find((todo) => todo.id === id)

    if (todoId.status === 'incomplete') {
      todoId.status = 'completed'
      return todoId
    }
  }

  getIncomplete() {
    const incompleteTodos = this.todos.filter(
      (todo) => todo.status === 'incomplete'
    )

    return incompleteTodos
  }

  getComplete() {
    const completedTodos = this.todos.filter(
      (todo) => todo.status === 'completed'
    )

    return completedTodos
  }
}

module.exports = TodoList
