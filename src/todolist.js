class ToDoList{
  constructor() {
    this.tasks = [{ id: 0, text: 'Wash Dishes', completed: true }]
  }

  createTask(newTask) {
    this.tasks.push(newTask)
  }
}

module.exports = ToDoList
