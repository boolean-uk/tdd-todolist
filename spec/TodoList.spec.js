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
})
