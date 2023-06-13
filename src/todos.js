class TodoItem {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.completed = false
  }
}

class TodoList {
  constructor(todoItems) {
    this.todoItems = todoItems
  }

  getAllTodos() {
    return this.todoItems
  }
}

module.exports = { TodoItem, TodoList }
