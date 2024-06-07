class ToDoItem {
  constructor(id, taskDescr) {
    this.id = id
    this.taskDescr = taskDescr
    this.isComplete = false
  }
}

class ToDosList {
  constructor() {
    this.toDos = []
  }

  addToDo(taskDescr) {
    this.toDos.push(new ToDoItem(this.toDos.length + 1, taskDescr))
    return this.toDos
  }

  getAllTodos() {
    return this.toDos
  }

  setCompleted(id) {
    const task = this.toDos.find((td) => td.id === id)
    if (task && task.isComplete === false) {
      task.isComplete = true
    } else {
      console.log('To Do item not found or To Do is already completed')
      return false
    }
  }

  getCompleted() {
    const completedToDos = this.toDos.filter((td) => td.isComplete === true)
    return completedToDos
  }

  getIncomplete() {
    const incompleteToDos = this.toDos.filter((td) => td.isComplete === false)
    return incompleteToDos
  }

  searchTodos(id) {
    const todo = this.toDos.find((td) => td.id === id)
    if (todo) {
      return todo
    } else {
      console.log('A To Do with this ID does not exist')
      return false
    }
  }
  removeTodo(id) {
    const index = this.toDos.findIndex((td) => td.id === id)
    if (index !== -1) {
      this.toDos.splice(index, 1)
      return this.toDos
    } else {
      console.log('A To Do with this ID does not exist')
      return false
    }
  }
}



export { ToDoItem, ToDosList }
