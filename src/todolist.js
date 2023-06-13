class TodoList {
  constructor() {
    this.id = 0
    this.status = 'incomplete'
    this.todoList = []
  }

  create(description) {
    // update the id value.
    this.id++

    const newTodo = {
      id: this.id,
      description: description,
      status: this.status
    }

    this.todoList.push(newTodo)
    return newTodo
  }

  getAll() {
    const allTodoList = this.todoList.map((el) => {
        return 
    })
  }
}

const myTodoList = new TodoList() // Create a new instance of TodoList
myTodoList.create('Wash the dishes')
myTodoList.create('Complete the article')
myTodoList.create('Go to the shop')
myTodoList.create('Finish the code')
myTodoList.create('Test the code')
console.log(myTodoList.todoList)

export default TodoList
