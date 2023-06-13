const { create, get, setDone, getIncomplete, toDoList } = require('../src/todolist.js')

describe('create', () => {
  it('add a new todo to the todo object with a unique id and incomplete status', () => {
    // Given
    const todo = 'This string represents a note that is added'
    // When
    const result = create(todo)

    // Then

    expect(result).toEqual([{ id: 1, text: todo, status: 'incomplete' }])
  })
})

describe('get', () => {
  it('Return the array with the objects named toDoList', () => {
    // When
    const result = get()

    // Then
    expect(result).toEqual()
  })
})

describe('setDone', () => {
  it('will change the todo by the id to complete', () => {
    // Given
    const id = 1

    // When
    const result = setDone(id)

    // Then
    expect(result).toEqual([
      {
        id: 1,
        text: 'This string represents a note that is added',
        status: 'complete'
      }
    ])
  })
})

describe('getIncomplete', () => {
  it('return the array of objects that have an incomplete status only', () => {
    // Given
    const incompleteList = toDoList.filter((object) => {
      return object.status === 'incomplete'
    })
    // When
    const result = getIncomplete()

    // Then
    expect(result).toEqual(incompleteList)
  })
})
