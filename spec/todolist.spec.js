const { createTodo, TodoList } = require('../src/todolist')

describe('create todos', () => {
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

describe('create new list', () => {
  it('creating a new list', () => {
    const expectedResult = { title: "Test", 'items': [] }
    expect(JSON.stringify(new TodoList("Test"))).toEqual(JSON.stringify(expectedResult))
  })

  it('empty title produces a title = untitled', () => {
    const expectedResult = { title: "untitled", 'items': [] }
    expect(JSON.stringify(new TodoList(""))).toEqual(JSON.stringify(expectedResult))
  })
})
