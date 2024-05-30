import TodoList from '../src/todolist.js'

describe('TodoList', () => {
  it('should exist', () => {
    const td = new TodoList()
    expect(td).toBeInstanceOf(TodoList)
  })
})
