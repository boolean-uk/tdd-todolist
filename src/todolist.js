class ToDoList {
  constructor() {
    this.tasks = [{ id: 0, text: 'Wash Dishes', completed: false }]
  }

  createTask(newTask) {
    this.tasks.push(newTask)
  }

  getAll() {
    return this.tasks
  }

  completeTask(taskId) {
    this.tasks = this.tasks.map((item) => {
      return { ...item, completed: item.id === taskId ? true : item.completed }
    })
  }

  getIncompleteTasks() {
    return this.tasks.filter((item) => {
      return item.completed === false
    })
  }
}

module.exports = ToDoList
