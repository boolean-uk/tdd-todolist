class TodoList {
  constructor() {
    this.todoList = []
  }

  createTodo(description) {
    if (description.length > 0) {
      const todoItem = new TodoItem(description)
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

class TodoItem {
  constructor(description) {
    this.id = Date.now()
    this.description = description
    this.status = 'incomplete'
  }
}

module.exports = { TodoList, TodoItem }
