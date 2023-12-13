class TodoList {
  constructor() {
    this.todoList = []
  }

  createTodo(description, todoId) {
    if (description.length > 0) {
      const todoItem = new TodoItem(description, todoId)
      this.todoList.push(todoItem)

      return todoItem
    }

    return `Enter your todo's description for create new todo`
  }

  getAllTodo() {
    if (this.todoList.length > 0) return this.todoList

    return 'Todo list is empty'
  }

  setTodoComplete(todoId) {
    const findItem = this.todoList.find((item) => item.id === todoId) || null

    if (findItem) {
      findItem.status = 'complete'

      return true
    }

    return 'Todo not found'
  }

  getIncompleteTodo() {}

  getCompletedTodo() {}

  searchTodo() {}

  removeTodo() {}
}

class TodoItem {
  constructor(description, todoId) {
    this.id = todoId || Date.now()
    this.description = description
    this.status = 'incomplete'
  }
}

module.exports = { TodoList, TodoItem }
