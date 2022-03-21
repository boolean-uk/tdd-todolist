/* eslint-disable no-undef */
const TodoItem = require('../src/TodoItem.js')
const TodoList = require('../src/TodoList.js')

describe('TodoList', () => {
  it('creates a todo item', () => {
    const todoList = new TodoList()
    const expected = new TodoItem(1, 'turn the heating on!', 'incomplete')
    const result = todoList.create('turn the heating on!')
    // verify
    expect(result).toEqual(expected)
  })

  it('gets all todo items', () => {
    const todoList = new TodoList()
    const item1 = new TodoItem(1, 'turn the heating on!', 'incomplete')
    const item2 = new TodoItem(2, 'turn the heating off!', 'incomplete')
    todoList.create('turn the heating on!')
    todoList.create('turn the heating off!')

    const result = todoList.getAll()

    expect(result).toEqual([item1, item2])
  })

  it('sets completed by id', () => {
    const todoList = new TodoList()

    const item = todoList.create('turn the heating on!')
    const start = item.status
    expect(start).toEqual('incomplete')
    const changedItem = todoList.setCompleted(item.id)
    expect(item.id).toEqual(changedItem.id)
    const result = changedItem.status
    expect(result).toEqual('completed')
  })

  it('gets only todo items that are incomplete', () => {
    const todoList = new TodoList()

    const item1 = todoList.create('turn the heating on!')
    const item2 = todoList.create('turn the heating on!')
    todoList.setCompleted(item1.id)
    const result = todoList.getIncomplete()
    expect(result).toEqual([item2])
  })

  it('gets only todo items that are completed', () => {
    const todoList = new TodoList()

    const item = todoList.create('turn the heating on!')
    todoList.create('turn the heating on!')
    todoList.setCompleted(item.id)

    const result = todoList.getCompleted()
    expect(result).toEqual([item])
  })

  it('gets item by id', () => {
    const todoList = new TodoList()

    const item = todoList.create('turn the heating on!')

    const result = todoList.getItemById(1)
    expect(result).toEqual(item)

    const result2 = todoList.getItemById(2)

    expect(result2).toEqual(undefined)
  })

  it('removes item by id', () => {
    const todoList = new TodoList()

    todoList.create('turn the heating on!')
    expect(todoList.getAll().length).toEqual(1)

    todoList.remove(1)
    expect(todoList.getAll().length).toEqual(0)
  })

  it('gets items on a specific date', () => {
    const todoList = new TodoList()

    const newItem = todoList.create('turn the heating on!')
    const oldItem = todoList.create('hunt deers')
    const oldDate = new Date()
    oldDate.setFullYear(1990)
    oldItem.date = oldDate

    const result = todoList.getItemsByDate(new Date())
    expect(result).toEqual([newItem])

    const noData = todoList.getItemsByDate(new Date(0))
    expect(noData).toEqual([])
  })
})
