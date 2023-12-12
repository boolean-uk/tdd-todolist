const { createTodo } = require('../src/todolist')

describe('create todos', () => {
  console.log(createTodo)
  it('description is valid', () => {
    const expectedResult = {
      description: 'Test',
      complete: false
    }

    expect(createTodo('Test')).toEqual(expectedResult)
  })

  it("empty description returns false", () => {
    expect(createTodo('')).toEqual(false)
  })
})
