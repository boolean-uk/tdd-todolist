const ToDoList = require('../src/TodoList.js')

describe('A to-do list', () => {
  let tdl = ToDoList()
  beforeEach(() => {
    tdl = ToDoList()
  })

  it('creates a new to-do item on the list', () => {
    const result = tdl.create('do the dishes')

    const expect = {
      id: 1,
      task: 'do the dishes',
      status: 'incomplete'
    }
    expect(result).toEqual(expect)
  })

  it('returns all to-do item on the list', () => {
    tdl.create('do the dishes')
    tdl.create('fold laudry')
    const result = tdl.getAll()

    const expect = [
      {
        id: 1,
        task: 'do the dishes',
        status: 'incomplete'
      },
      {
        id: 2,
        task: 'fold laudry',
        status: 'incomplete'
      }
    ]
    expect(result).toEqual(expect)
  })
  it('returns removes item on the list', () => {})
  it('returns all complete item on the list', () => {})
  it('returns all incomplete item on the list', () => {})
  it('returns item with the matching Id from the list', () => {})
})
