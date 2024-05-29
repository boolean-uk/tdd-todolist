import { ToDoItem, ToDoManager } from '../src/todolist.js'
import 'jasmine-expect'

describe('To Do List', () => {
  it('To do item should have ID, text, and be set to incomplete', () => {
    const item = new ToDoItem(1, 'Learn to code', false)

    expect(Object.keys(item)).toEqual(['id', 'todo', 'complete'])
  })

  it('To do manager should have an add item function', () => {
    const tdm = new ToDoManager()

    expect(tdm.addItem).toBeFunction()
  })

  it('To do manager should have an add item function that adds items to the list', () => {
    const tdm = new ToDoManager()

    expect(tdm.toDos.length).toBeGreaterThan(0)
  })
})
