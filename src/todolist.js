class Item {
  constructor(id, description) {
    this.description = description
    this.isCompleted = 'incomplete'
    this.id = id + 1
  }
}

class TodoList {
  constructor() {
    this.todos = []
  }

  createTodo(description) {
    this.todos.push(new Item(this.todos.length, description))
    return this.todos
  }

  getAll() {
    console.log(this.todos)
    return this.todos
  }
}

module.exports = {
  Item,
  TodoList
}
