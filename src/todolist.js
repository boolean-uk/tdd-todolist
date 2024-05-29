import crypto from 'crypto'

class ToDoList {
  constructor() {
    this.toDos = []
  }

  createToDo(text) {
    const toDo = {
      id: crypto.randomUUID(),
      text,
      complete: false
    }

    this.toDos.push(toDo)
    return toDo
  }

  getAllToDos() {
    return this.toDos
  }

  setToDo(id) {
    const selectedtoDo = this.toDos.find((element) => element.id === id)
    selectedtoDo.complete = !selectedtoDo.complete
  }

  getCompleteToDos() {
    const completeToDos = this.toDos.filter((element) => {
      return element.complete
    })

    return completeToDos
  }
}

export default ToDoList
