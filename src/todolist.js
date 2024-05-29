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
    let currentIndex = 0
    const rmvTodo = this.todosList.find((todo, index) => {
      if (todo.id === id) {
        currentIndex = index
        return true
      } else return false
    })
    if (!rmvTodo) {
      return false
    } else {
      this.todosList.splice(currentIndex, 1)
      return true
    }
  }

  getCompleted() {
    const completedTodos = []
    if (this.todosList.length === 0) {
      return []
    } else {
      this.todosList.map((todo, index) => {
        if (todo.status === true) {
          completedTodos.push(todo)
        }
      })
    }
    return completedTodos
  }
}

export { TodosList, Todo }
