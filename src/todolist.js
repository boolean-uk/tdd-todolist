class ToDoList {
  constructor() {
    this.toDos = []
  }

  create(newText) {
    const newToDo = {
      text: newText,
      id: this.toDos.length + 1,
      complete: false
    }
    this.toDos.push(newToDo)
    return newToDo
  }

  getAllToDos() {
    return this.toDos
  }
}

export { ToDoList }
