let nextid = 1

class Item {
  constructor(description) {
    this.description = description
    this.isCompleted = 'incomplete'
    this.id = nextid++
  }
}

class TodoList {
  constructor() {
    this.todos = []
  }

  createTodo(item) {
    this.todos.push(item)
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
