const { Item } = require('../src/todolist.js')

describe('item', () => {
  it('should have an id, description and be incomplete', () => {
    const item = new Item('something')

    expect(item.description).toBe('something')
    expect(item.isCompleted).toBe('incomplete')
    expect(item.id).toBe(1)
  })
})

describe('todo list', () => {
  it('should add items to todo list', () => {
    const todoList = new TodoList()

    expect(todoList.todos.length).toBe(0)
  })
})
