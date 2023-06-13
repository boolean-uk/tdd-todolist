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
  it('returns all items', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.getAllTodoItems()).toEqual([
      {
        id: 1,
        description: 'study',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'laundry',
        status: 'incomplete'
      }
    ])
  })
  it('returns item completed', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(2)
    expect(td.getAllTodoItems()).toEqual([
      {
        id: 1,
        description: 'study',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'laundry',
        status: 'complete'
      }
    ])
  })
})
