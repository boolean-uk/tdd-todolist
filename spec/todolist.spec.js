const ToDoList = require('../src/todolist')

describe('ToDoList', () => {
  let taskList

  beforeEach(() => {
    taskList = new ToDoList()
  })

  it('should create a task.', () => {
    const taskLength = taskList.tasks.length
    console.log("text1:", taskList.tasks)
    taskList.createTask({ id: 1, text: 'Wash armpits', completed: false })
    expect(taskList.tasks.length).toEqual(taskLength + 1)
    console.log("text2:", taskList.tasks)
  })

  it('should get all tasks.', () => {
    const taskLength = taskList.tasks.length
    expect(taskList.getAll().length).toEqual(taskLength)
  })
})
