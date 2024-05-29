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
    return selectedtoDo
  }

  getCompleteToDos() {
    const completeToDos = this.toDos.filter((element) => {
      return element.complete
    })

    return completeToDos
  }

  getIncompleteToDos() {
    const incompleteToDos = this.toDos.filter((element) => {
      return !element.complete
    })

    return incompleteToDos
  }

  searchToDos(id) {
    const searchedtoDo = this.toDos.find((element) => element.id === id)
    return searchedtoDo
  }
}

export default ToDoList
