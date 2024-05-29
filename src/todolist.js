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
    if (id - 1 >= this.toDos.length) {
      return 'Item not found'
    }
    this.toDos[id - 1].complete = true
    return this.toDos[id - 1]
  }

  getAllComplete() {
    const completeToDos = this.toDos.filter((toDo) => toDo.complete)
    return completeToDos
  }
}

export { ToDoList }
