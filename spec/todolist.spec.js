const TodoList = require('../src/todolist.js')

describe('todo', () => {
  it('should have a title', () => {
    const todo = new TodoList('study')

    expect(todo.title).toBe('study')
  })
})
