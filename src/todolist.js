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

  addItem() {}
}

export { ToDoItem, ToDoManager }
