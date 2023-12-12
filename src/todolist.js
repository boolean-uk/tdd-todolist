class Todos {
  constructor() {
    this.todoList = []
  }

  getAllTodos() {
    // if (this.todoList.length === 0) {
    //   return []
    // } else {
      return this.todoList
    // }
  }

  createTodo(text) {
    if (typeof text !== 'string') {
      return 'text value must be a valid string'
    } else {
      const newToDo = {
        id: this.todoList.length + 1,
        text,
        completed: false
      }
      this.todoList.push(newToDo)
      return newToDo
    }
  }
}

// const todo = new Todos()
// console.log(todo.getAllTodos())
// console.log(todo.createTodo('clean'))
// console.log(todo.getAllTodos())

module.exports = { Todos }
