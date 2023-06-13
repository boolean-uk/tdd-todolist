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

  

}

const newTodo = new CreateTodoList()
console.log(newTodo)
newTodo.createNewTodo('study')
console.log(newTodo)
newTodo.createNewTodo('laundry')
console.log(newTodo)
newTodo.createNewTodo('beaching')
console.log(newTodo)

export default CreateTodoList
