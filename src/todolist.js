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
    if (this.list.length === 0) return 'No todo items'
    return this.list.map((item) => item.description)
  }

  setTodo(id) {
    const foundItem = this.list.find((item) => item.id === id)
    foundItem.completed = !foundItem.completed
  }

  getIncompleted() {
    const newList = this.list.filter((item) => item.completed === false)
    if (newList.length === 0) return false
    return newList.map((item) => item.description)
  }

  getCompleted() {
    const newList = this.list.filter((item) => item.completed === true)
    return newList.map((item) => item.description)
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
