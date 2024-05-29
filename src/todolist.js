import crypto from 'crypto'

class ToDoList {
  constructor() {
    this.toDos = []
  }

  createToDo(text) {
    const toDo = new Item(text)

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

    if (!searchedtoDo) {
      throw Error('There is no todo with this ID')
    }

    return searchedtoDo
  }

  deleteToDo(id) {
    this.toDos = this.toDos.filter((element) => {
      return !element.id === id
    })
  }
}

class Item {
  constructor(text) {
    this.id = crypto.randomUUID()
    this.text = text
    this.complete = false
  }
}

export default ToDoList
