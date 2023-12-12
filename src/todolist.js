const createTodo = (description) => {
  if (!description) return false
  return { description, complete: false }
}

class TodoList {
  constructor(title) {
    this.title = (title || "untitled");
    this.items = [ ];
  }
}



module.exports = { createTodo, TodoList }
