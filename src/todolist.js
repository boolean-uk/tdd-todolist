class ToDoItem {
    static currentId = 0
  constructor(task) {
    this.id = ToDoItem.currentId++
    this.task = task
    this.isComplete = false
  }
}

export { ToDoItem }
