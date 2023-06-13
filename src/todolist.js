class CreateTodoList {
  constructor() {
    this.todoItems = []
    this.id = 1
  }

  createNewTodo(todo) {
    const todoItem = {
      id: this.id++,
      description: todo,
      status: 'incomplete'
    }
    this.todoItems.push(todoItem)
    return this.todoItems
  }

  getAllTodoItems() {
    return this.todoItems
  }

  setTodoComplete(id) {
    const todoItem = this.todoItems.find((item) => item.id === id)
    if (todoItem) {
      return (todoItem.status = 'complete')
    }
    return 'The todo your looking for was not found'
  }

  getAlltodoIncompleteItems() {
    return this.todoItems.filter((item) => item.status === 'incomplete')
  }

  getAlltodoCompleteItems() {
    return this.todoItems.filter((item) => item.status === 'complete')
  }

  searchByToDoId(id) {
    return this.todoItems.filter((item) => item.id === id)
  }

  deleteTodo(id) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id)
    return this.todoItems
  }
}

const td = new CreateTodoList()
console.log(td)
td.createNewTodo('study')
console.log(td)
td.createNewTodo('laundry')
console.log(td)
td.createNewTodo('beaching')
console.log(td)
console.log('all todos', td.getAllTodoItems())
console.log('set complete:', td.setTodoComplete(3))
console.log('set complete:', td.setTodoComplete(4))
console.log('all todos', td.getAllTodoItems())
console.log('all incomplete', td.getAlltodoIncompleteItems())
console.log('all todos', td.getAllTodoItems())
console.log('all complete', td.getAlltodoCompleteItems())
console.log('search', td.searchByToDoId(1))
console.log('delete', td.deleteTodo(1))
console.log('all todos', td.getAllTodoItems())

module.exports = CreateTodoList
