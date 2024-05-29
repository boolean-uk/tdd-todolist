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

  setComplete(id) {
    this.toDos[id - 1].complete = true
    return this.toDos[id - 1]
  }
}

export { ToDoList }
