class CreateNewTodo {
  constructor(description) {
    this.description = description
    this.id = Math.random()
    this.status = 'incomplete'
  }

//   create(newTodo) {
//     return this.todoList.push(newTodo)
//   }
}

class TodoList {
constructor(todoItems) {
    this.todoItems = []
}

create(description) {
    const newTodo = new CreateNewTodo(description)

}
}

const newTodo = new CreateNewTodo('study')
console.log(newTodo)



export default CreateNewTodo
