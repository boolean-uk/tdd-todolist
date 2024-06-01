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
    const todo = this.getById(id)
    
    if(!todo) {
      throw 'todo not found'
    }
    todo.status = 'complete'
    return todo
  }
  
  getById(id) {
    const getTodo = this.todos.find(t => t.id === id)
    return getTodo
  }

  getByStatus(status) {
    const todo = this.todos.filter(t => t.status === status)
    return todo
  }

  removeTodo(id) {
    const found = this.getById(id)

    
    this.todos = this.todos.filter(t => t.id !== id)
    return found
  }
}

export { TodoItem, TodoList }
