let idCounter = 1

const increaseId = (num) => {
  idCounter = num
}

class ToDoList {
  constructor() {
    this.list = []
  }

  addItem(item) {
    this.list.push(item)
  }
}

class ToDoItem {
  constructor(description) {
    this.id = idCounter
    this.description = description
    this.completed = false
    increaseId(idCounter + 1)
  }
}

module.exports = {
  ToDoList,
  ToDoItem,
  increaseId
}
