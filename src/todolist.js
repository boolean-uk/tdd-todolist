const { ConsoleReporter } = require('jasmine')

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

  getIncompleteTodos(completed) {
    const incompleteTodos = this.todoList.filter(
      (todo) => todo.completed === completed
    )
    if (completed !== false) {
      return 'completed status is not valid'
    } else {
      return incompleteTodos
    }
  }

  getCompleteTodos(completed) {
    const completetodos = this.todoList.filter(
      (todo) => todo.completed === completed
    )
    if (completed !== true) {
      return 'completed status is not valid'
    } else {
      return completetodos
    }
  }
}

const todo = new Todos()
// console.log(todo.getAllTodos())
// console.log(todo.createTodo('clean'))
todo.createTodo('clean')
todo.createTodo('tidy')
todo.createTodo('hoover')
todo.createTodo('mop')
todo.completeTodo(2)
todo.completeTodo(4)
// console.log(todo.completeTodo())
// console.log(todo.getAllTodos())
console.log(todo.getCompleteTodos())
// todo.getIncompleteTodos(false)

module.exports = { Todos }
