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
constructor() {
    this.todoItems = []
    this.id = 0
}

create(todo) {
  
  id: this.id,

}

}

const newTodo = new CreateNewTodo('study')
console.log(newTodo)



export default CreateNewTodo
