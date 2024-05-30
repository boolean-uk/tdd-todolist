class ToDoList{
  constructor() {
    this.tasks = [{ id: 0, text: 'Wash Dishes', completed: true }]
  }

  createTask(newTask) {
    this.tasks.push(newTask)
  }

  getAll() {
    return this.tasks
  }
}

module.exports = ToDoList
