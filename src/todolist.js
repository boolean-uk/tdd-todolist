class Todo {
  constructor(id, text, status) {
    this.id = id
    this.text = text
    this.status = status
  }
}
class TodosList {
  constructor() {
    this.todosList = []
  }

  add(todo) {
    this.todosList.push(todo)
    return this.todosList
  }

  search(id) {
    return Boolean(this.todosList.find((todo) => todo.id === id))
  }

  remove(id) {
    const rmvTodo = this.todosList.find((todo) => {
      if (todo.id === id) {
        return true
      } else return false
    })
    if (!rmvTodo) {
      return false
    } else {
      this.todosList.splice(id - 1, 1)
      return true
    }
  }
}

export { TodosList, Todo }
