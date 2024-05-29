import { ToDoItem } from '../src/todolist.js'

describe('To Do List', () => {
  it('To do item should have ID, text, and be set to incomplete', () => {
    const item = new ToDoItem(1, 'Learn to code', false)
    expect(Object.keys(item)).toBe(['id', 'toDo', 'complete'])
  })
})

