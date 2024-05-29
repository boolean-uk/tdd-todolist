class TodoList {
  constructor(id = 1, status = false) {
    this.id = id
    this.status = status ? 'completed' : 'incompleted'
  }

  create(title) {
    const allTodos = []

    const newTodo = {
      id: this.id + allTodos.length,
      title: title,
      status: this.status
    }

    allTodos.push(newTodo)

    return newTodo
  }
}

module.exports = TodoList
