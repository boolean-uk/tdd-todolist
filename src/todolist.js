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
}

module.exports = {
  Item,
  TodoList
}
