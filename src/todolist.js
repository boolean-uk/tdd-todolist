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

  getTodos() {
    return this.list.map((item) => item.description)
  }
}

class ToDoItem {
  constructor(description) {
    if (!description || description === '') {
      throw new Error('Please enter a todo!')
    }
    this.id = idCounter
    this.description = description
    this.completed = false
    increaseId(idCounter + 1)
  }
}

// const newItem = new ToDoItem('')
// console.log(newItem)

module.exports = {
  ToDoList,
  ToDoItem,
  increaseId
}
