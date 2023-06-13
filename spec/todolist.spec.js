const CreateTodoList = require('../src/todolist.js')
// write tests

describe('Create Todo List', () => {
  let td
  beforeEach(() => {
    td = new CreateTodoList()
  })
  it('returns a new todo item', () => {
    expect(td.createNewTodo('laundry')).toEqual([
      {
        id: 1,
        description: 'laundry',
        status: 'incomplete'
      }
    ])
  })
})
