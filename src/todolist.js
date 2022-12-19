class TodoList {
  constructor() {
    this.id = 0
    this.todos = []
    // this.complete = false
  }
  // - Create a todo item that has an ID,
  // text description, and starts off incomplete
  create(txt) {
    this.id++
    const todoItem = {
      id: this.id,
      description: txt,
      status: 'incomplete'
    }
    this.todos.push(todoItem)
    return todoItem
  }
  
  // - Get all todo items
  getAlltodo(){
    return this.todos
  }

  // - Set a todo completed by its ID
  completedTodo(id){
    const found = todos.find((todo) => todo.id === id)
    if (!found) return

    found.complete = true
    return getAlltodo()
  }
  // - Get only todo items that are incomplete

  // - Get only todo items that are complete

  // - Search and return a todo item by its ID,
  // or return a message saying it doesn’t exist

  // - Remove a todo item by its ID

  // getItems() {
  //   return this.items
  // }

  // getTodo(filter){
  //   if (!filter) {
  //     return allTodo
  //   }
  //   if (filter === 'incomplete') {
  //     const incompleteTodo = this.todos.filter((toDo) => !toDo.completed)
  //     return incompleteTodo
  //   }
  //   if (filter === 'complete') {
  //     const completeTodo = this.todos.filter((toDo) => toDo.completed)
  //     return completeTodo
  //   }
  // }
}
module.exports = {
  TodoList
}
