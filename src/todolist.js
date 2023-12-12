const createTodo = (description) => {
  if (!description) return false
  return { description, complete: false }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.items = [];
  }
}

module.exports = { createTodo, TodoList }
