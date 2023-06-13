class TodoItem {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.status = 'incomplete'
  }
}

class TodoList {
  constructor(todoList) {
    this.todoList = todoList
  }

  createTodoItem(text) {
    if (text === '') {
      return false
    } else if (this.todoList.length !== 0) {
      const newId = this.todoList[this.todoList.length - 1].id + 1
      const newTodo = new TodoItem(newId, text)
      this.todoList.push(newTodo)
      return true
    } else {
      const newTodo = new TodoItem(1, text)
      this.todoList.push(newTodo)
      return true
    }
  }

  getAllTodos() {
    if (this.todoList.length === 0) {
      return false
    } else {
      return this.todoList
    }
  }

  toggleStatus(id) {
    const chosenTodo = this.todoList.find((item) => item.id === id)
    if (chosenTodo) {
      if (chosenTodo.status === 'incomplete') {
        chosenTodo.status = 'complete'
      } else {
        chosenTodo.status = 'incomplete'
      }
    }
    return false
  }

  getComplete() {
    const completedTodos = this.todoList.filter(
      (item) => item.status === 'complete'
    )
    return completedTodos
  }

  getIncomplete() {
    const incompletedTodos = this.todoList.filter(
      (item) => item.status === 'incomplete'
    )
    return incompletedTodos
  }
}

module.exports = { TodoItem, TodoList }
