class ToDoItem {
  static currentId = 0
  constructor(taskDescr) {
    this.id = ToDoItem.currentId++
    this.taskDescr = taskDescr
    this.isComplete = false
  }
}

class ToDoList {
    constructor() {
        
    }
}

export { ToDoItem }
