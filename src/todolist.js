class Item {
  constructor(id, description) {
    this.description = description
    this.isCompleted = 'incomplete'
    this.id = id
  }
}

class TodoList {
  constructor() {
    this.todos = []
    this.id = 1
  }

  createTodo(description) {
    const newTodo = new Item(this.id, description)
    this.id++
    this.todos.push(newTodo)

    return this.todos
  }

  getAll() {
    console.log(this.todos)
    return this.todos
  }

  setComplete(id) {
    const found = this.todos.find((todo) => todo.id === id)
    if (found) {
      found.isCompleted = 'complete'
    } else {
      console.log('Todo item not found')
      return false
    }

    console.log(this.todos)
  }

  findTodo(id) {
    this.found = this.todos.find((todo) => todo.id === id)
    console.log(this.found)

    if (!this.found) {
      console.log('Todo item not found')
      return false
    }
  }

  removeTodo(id) {
    const foundIndex = this.todos.findIndex((todo) => todo.id === id)

    if (foundIndex > 0) {
      this.todos.splice(foundIndex, 1)
    } else {
      console.log('Todo item not found')
      return false
    }
    console.log(this.todos)
  }

  filter(input) {
    this.filtered = this.todos.filter((todo) => todo.isCompleted === input)
    console.log(this.filtered)
  }
}

module.exports = {
  Item,
  TodoList
}
