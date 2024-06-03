/* eslint-disable prettier/prettier */
class TodoList {
    constructor(){
        this.todos = []
        this.id = 1
    }
  
  create(text) {
    const newTodo = new Todo(this.id, text, 'incomplete')
    this.id++
    this.todos.push(newTodo)
    return newTodo

  }
  
  getAll() {
    return this.todos
  }
 
}

class Todo {
  constructor(id, text, status) {
    this.id = id
    this.text = text
    this.status = status
  }
}

export { Todo }

export default TodoList