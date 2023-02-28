const { createToDo } = require('./../src/todolist.js')

describe('To dos', () => {
  it('Creates a To-Do item', () => {
    const description = 'Feed the cat'
    const result = createToDo(description)
    const expectedResult = { id: 1, text: 'Feed the cat', status: 'incomplete' }

    expect(result).toEqual(expectedResult)
  })
})
