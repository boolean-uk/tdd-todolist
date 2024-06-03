/* eslint-disable prettier/prettier */
class TodoList {
  create(text) {
    return new Todo(1, text)

  }
}

class Todo {
  constructor(id, text) {
    this.id = id
    this.text = text
  }
}

export { Todo }

export default TodoList