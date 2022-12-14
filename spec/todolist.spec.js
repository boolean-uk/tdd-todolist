const {
  create,
  resetTodolist,
  getAll,
  setComplete
} = require('../src/todolist.js')

describe('TodoList', () => {
  beforeEach(() => {
    resetTodolist()
  })

  it('creates a todo item', () => {
    const item = create('write code')

    expect(item).toEqual({
      id: 1,
      description: 'write code',
      status: 'incomplete'
    })
  })

  it('creates multiple todo items', () => {
    create('make coffee')
    const item2 = create('go outside for once')

    expect(item2).toEqual({
      id: 2,
      description: 'go outside for once',
      status: 'incomplete'
    })
  })

  it('should get all todos', () => {
    create('make coffee')
    create('go outside for once')

    const todos = getAll()

    expect(todos).toEqual([
      {
        id: 1,
        description: 'make coffee',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'go outside for once',
        status: 'incomplete'
      }
    ])
  })
})
