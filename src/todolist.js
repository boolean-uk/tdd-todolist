class ToDoItem {
  constructor(id, toDo, complete) {
    this.id = id
    this.toDo = toDo
    this.complete = complete
  }
}

class ToDoManager {
  constructor() {
    this.toDos = []
  }

  addToDo(item) {
    this.toDos.push(item)
  }
}

export { ToDoItem, ToDoManager }
