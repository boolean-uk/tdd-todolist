const TodoList = require('../src/TodoList.js')

describe('A to-do list', () => {
  let ToDoList = TodoList()
  beforeEach(() => {
    ToDoList = ToDoList()
  })

  it('creates a new to-do item on the list', () => {
    const result = ToDoList.create('do the dishes')

    const expect = {
      id: 1,
      task: 'do the dishes',
      status: 'incomplete'
    }
    expect(result).toEqual(expect)
  })
})
