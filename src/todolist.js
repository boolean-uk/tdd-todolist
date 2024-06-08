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
    const todo = this.todos.find((todo) => todo.id === id)

    if (todo && todo.status === 'incomplete') {
      todo.status = 'completed'
      return todo
    }
  }

  getIncomplete() {
    return this.todos.filter((todo) => todo.status === 'incomplete')
  }

  getComplete() {
    return this.todos.filter((todo) => todo.status === 'completed')
  }

  search(id) {
    const todo = this.todos.find((todo) => todo.id === id)

    if (todo) {
      return todo
    }
    return 'The todo searched does not exists'
  }

  remove(id) {
    const index = this.todos.findIndex((todo) => todo.id === id)

    if (index !== -1) {
      return this.todos.splice(index, 1)[0]
    }
  }
}

export default TodoList
