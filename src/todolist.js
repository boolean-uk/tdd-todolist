export default class TodoList {
  constructor() {
    this.id = 0
    this.todos = []
  }

  create(todo) {
    this.id++
    const item = {
      id: this.id,
      text: todo,
      isComplete: false
    }
    return item
  }
}
