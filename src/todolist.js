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
    const todo = new TodoItem(this.id, title, 'incomplete')
    this.id++
    this.todos.push(todo)

    return todo
  }

  getAll() {
    return this.todos
  }

  setComplete(id) {
    const todo = this.todos.find(todo => todo.id === id)
    todo.status = 'complete'
    return todo
  }
  
  getById(id) {
    const getTodo = this.todos.find(t => t.id === id)
    return getTodo
  }
}

export { TodoItem, TodoList }
