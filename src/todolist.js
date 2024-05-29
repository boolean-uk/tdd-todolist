class ToDoItem {
  constructor(id, todo, complete) {
    this.id = id
    this.todo = todo
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
