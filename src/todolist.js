class Todo {
  constructor(id, description) {
    this.id = id
    this.description = description
    this.completed = false
  }
}

class TodoList {
  constructor() {
    this.items = []
    this.currentId = 1
  }

  addTodo(description) {
    const todo = new Todo(this.currentId++, description)
    this.items.push(todo)
    return todo
  }

  getTodos() {
    return this.items
  }

  setTodoCompleted(id) {
    const todo = this.items.find((item) => item.id === id)
    if (todo) {
      todo.completed = true
    }
  }

  getIncompleteTodos() {
    return this.items.filter((item) => !item.completed)
  }

  getCompleteTodos() {
    return this.items.filter((item) => item.completed)
  }

  searchTodoById(id) {
    const todo = this.items.find((item) => item.id === id)
    return todo || 'Todo item not found'
  }

  removeTodoById(id) {
    this.items = this.items.filter((item) => item.id !== id)
  }
}

module.exports = { TodoList }
