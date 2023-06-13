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
  it('Get all incomplete tasks', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    newTodoList.setComplete(3)
    const result = newTodoList.getIncomplete()
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
  it('Get all complete tasks', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    newTodoList.setComplete(3)
    const result = newTodoList.getComplete()
    // Then
    expect(result).toEqual = [
      {
        id: 3,
        text: 'do the washing up',
        status: 'complete'
      },
    ]
  });
  it('Search task by id', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.search(3)
    // Then
    expect(result).toEqual = [
      {
        id: 3,
        text: 'do the washing up',
        status: 'incomplete'
      },
    ]
  });
  it('Remove task by id', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.remove(3)
    // Then
    expect(result).toEqual = `task of id 3 has been deleted`
  })
})
