/* eslint-disable prettier/prettier */
class TodoList {
    constructor(){
        this.todos = []
        this.id = 1
    }
  // eslint-disable-next-line lines-between-class-members
  create(text) {
    const newTodo = new Todo(this.id, text, 'incomplete')
    this.id++
    return newTodo

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