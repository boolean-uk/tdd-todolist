class Todos {
  constructor() {
    this.todoList = []
  }

  getAllTodos() {
    if (this.todoList.length === 0) {
      return []
    } else {
      return this.todoList
    }
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

  completeTodo(id) {
    const todoToComplete = this.todoList.filter((todo) => todo.id === id)
    if (!id) {
      return 'id is not valid'
    } else {
      todoToComplete[0].completed = true
      return todoToComplete[0]
    }
  }
}

const todo = new Todos()
// console.log(todo.getAllTodos())
// console.log(todo.createTodo('clean'))
todo.createTodo('clean')
todo.completeTodo(1)
console.log(todo.completeTodo(1))
// console.log(todo.getAllTodos())
// console.log(todo.completeTodo())

module.exports = { Todos }
