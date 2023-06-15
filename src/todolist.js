class TodoList {
  constructor() {
    this.id = 0
    this.todoList = []
  }

  addItem(description) {
    const toDo = {
      id: ++this.id,
      description: description,
      isComplete: false
    }
    this.todoList.push(toDo)
    return this.todoList
  }

  getAll() {
    return this.todoList
  }

  setComplete(id) {
    const toDo = this.todoList.find((item) => item.id === id)
    if (toDo.isComplete === false) {
      toDo.isComplete = true
      return toDo
    }
  }

  getIncomplete() {
    const incomplete = this.todoList.map((item) => {
      if (item.isComplete === false) {
        return item
      }
    })
    return incomplete
  }

  getComplete() {
    const complete = this.todoList.map((item) => {
      if (item.isComplete === true) {
        return item
      }
    })
    return complete
  }

  searchByid(id) {
    const toDo = this.todoList.find((item) => {
      if (item.id === id) {
        console.log(item)
        return item
      }
    })
    if (toDo) {
      return toDo
    } else return 'item does not exist'
  }

  removeByid(id) {
    const toDoIndex = this.todoList.findIndex((item) => item.id === id)
    // console.log(toDoIndex)

    if (toDoIndex !== -1) {
      this.todoList.splice(toDoIndex, 1)
    } else {
      return 'no match found'
    }

    return this.todoList
  }
}

export default TodoList
