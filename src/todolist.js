class ToDoList {
  constructor(text) {
    this.lastUsedId = 0
    this.itemsArray = []
  }

  createToDo(text) {
    const newItem = { id: this.lastUsedId, text: text, complete: false }
    this.itemsArray.push(newItem)
    this.lastUsedId++
  }

  getAllItems() {
    return this.itemsArray
  }
}

module.exports = ToDoList
