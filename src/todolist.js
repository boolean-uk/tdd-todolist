class TodoItem {
  constructor(id, title, status) {
    this.id = id
    this.title = title
    this.status = status
  }


}

class TodoList {

  createTodo(title) {
    const todo = new TodoItem(1, title)

    return todo
  }
  
}

export { TodoItem, TodoList }
