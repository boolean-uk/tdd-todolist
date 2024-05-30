class TodoItem {
  constructor(id, title, status) {
    this.id = id
    this.title = title
    this.status = status
  }


}

class TodoList {
  constructor() {
    this.todos = []
    this.id = 1
  }


  createTodo(title) {
    const todo = new TodoItem(this.id, title)
    this.id++
    this.todos.push(todo)

    return todo
  }
  
}

export { TodoItem, TodoList }
