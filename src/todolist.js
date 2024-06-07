class ToDoList {
  constructor() {
    this.toDos = []
  }

  create(newText) {
    const id = this.toDos.length + 1
    const newToDo = new ToDoItem(newText, id)
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

  getAllIncomplete() {
    const incompleteToDos = this.toDos.filter((toDo) => !toDo.complete)
    return incompleteToDos
  }

  find(id) {
    return this.toDos.find((todo) => todo.id === id)
  }

  remove(id) {
    this.toDos.splice(id - 1, 1)
    return this.toDos
  }
}

class ToDoItem {
  constructor(newText, id) {
    this.id = id
    this.text = newText
    this.complete = false
  }
}


export { ToDoList }
