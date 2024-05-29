import { TodoItem } from '../src/todolist.js'

describe('todoItem', () => {
  it('should have an id, string, and status', () => {
    const todoItem = new TodoItem(Number, 'String', Boolean)
    expect(todoItem.id).toBe(Number)
    expect(todoItem.todo).toBe('String')
    expect(todoItem.status).toBe(Boolean)
  })
})
