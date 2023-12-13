class TodoList {
  constructor() {
    this.todoList = []
  }

  createTodo(description) {
    if (description.length > 0) {
      const todoItem = {
        ID: String(this.todoList.length + 1),
        description,
        status: 'incomplete'
      }

      this.todoList.push(todoItem)

      return todoItem
    } else {
      return `Enter your todo's description for create new todo`
    }
  }

  getAllTodo() {}

  setTodoComplete() {}

  getIncompleteTodo() {}

  getCompletedTodo() {}

  searchTodo() {}

  removeTodo() {}
}

module.exports = TodoList
