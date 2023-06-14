class TodoList {
  constructor() {
    this.todoList = []
  }

  addItem(description) {
    const toDo = {
      id: this.todoList.length + 1,
      description: description,
      isComplete: false
    }
    return toDo
  }

//   getAll

}


export default TodoList

