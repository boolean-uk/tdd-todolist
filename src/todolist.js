/* eslint-disable prettier/prettier */
class TodoList {
  create(text) {
    return new Todo(1, text, 'incomplete')

  }
}

class Todo {
  constructor(id, text, status) {
    this.id = id
    this.text = text
    this.status = status
  }
}

export { Todo }

export default TodoList