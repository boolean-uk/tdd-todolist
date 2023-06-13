// import here
const { TodoList } = require('../src/todolist.js')

describe('TodoList', () => {
  it('Creates a new task with the user putting in a string', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 'make the bed'
    // When
    const result = newTodoList.create(task)
    // Then
    expect(result).toEqual = {
      id: 1,
      text: 'make the bed',
      status: 'incomplete'
    }
  })
  it('Get all ToDos', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    const result = newTodoList.getAll()
    // Then
    expect(result).toEqual = [
      {
        id: 1,
        text: 'make the bed',
        status: 'incomplete'
      },
      { id: 2, text: 'cook dinner', status: 'incomplete' }
    ]
  })
  it('Set ToDo list items to complete', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 'make the bed'
    // When
    newTodoList.create(task)
    const result = newTodoList.setComplete(1)
    // Then
    expect(result).toEqual = {
      id: 1,
      text: 'make the bed',
      status: 'complete'
    }
  })
})
