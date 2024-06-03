/* eslint-disable prettier/prettier */
class TodoList {
  create(text) {
    return new Todo(1)

  }
}

class Todo {
  constructor(id) {
    this.id = id
  }
}

export { Todo }

export default TodoList