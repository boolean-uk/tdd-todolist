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
  it('returns item not found', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(3)
    expect(td.setTodoComplete(3)).toEqual(
      'The todo your looking for was not found'
    )
  })
  it('returns only incomplete', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(2)
    expect(td.getAlltodoIncompleteItems()).toEqual([
      {
        id: 1,
        description: 'study',
        status: 'incomplete'
      }
    ])
  })
  it('returns only complete', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(2)
    expect(td.getAlltodoCompleteItems()).toEqual([
      {
        id: 2,
        description: 'laundry',
        status: 'complete'
      }
    ])
  })
  it('returns item searched', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.searchByToDoId(2)).toEqual([
      {
        id: 2,
        description: 'laundry',
        status: 'incomplete'
      }
    ])
  })
  it('delete a todo with id', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.deleteTodo(1)
    expect(td.getAllTodoItems()).toEqual([
      {
        id: 2,
        description: 'laundry',
        status: 'incomplete'
      }
    ])
  })
})
