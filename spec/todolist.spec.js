import { ToDoItem, ToDoManager } from '../src/todolist.js'
import 'jasmine-expect'

describe('To Do List', () => {
  it('To do item should have ID, text, and be set to incomplete', () => {
    const toDo = new ToDoItem(1, 'Learn to code', false)

    expect(Object.keys(toDo)).toEqual(['id', 'toDo', 'complete'])
  })

  it('To do manager should have an add item function', () => {
    const tdm = new ToDoManager()

    expect(tdm.addToDo).toBeFunction()
  })

  it('To do manager should have an add item function that adds items to the list', () => {
    const tdm = new ToDoManager()
    const toDo = new ToDoItem(1, 'Learn to code', false)
    tdm.addToDo(toDo)

    expect(tdm.toDos.length).toBeGreaterThan(0)
  })

  it('To do manager should have a get all items function that returns all toDos', () => {
    const tdm = new ToDoManager()
    const toDo = new ToDoItem(1, 'Learn to code', false)
    const toDo2 = new ToDoItem(2, 'Learn to code better', false)

    tdm.addToDo(toDo)
    tdm.addToDo(toDo2)

    expect(tdm.getAllToDos).toEqual([
      { id: 1, toDo: 'Learn to code', complete: false },
      { id: 2, toDo: 'Learn to code better', complete: false }
    ])
  })
})
