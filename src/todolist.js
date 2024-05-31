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
    this.addTodo(item)
    return item
  }

  addTodo(todo) {
    return this.todos.push(todo)
  }
}
