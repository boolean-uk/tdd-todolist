import { ToDoList } from '../src/todolist.js'
import 'jasmine-expect'

describe('To Do List', () => {
  it('To do manager should have a create function that adds a new ToDo and adds an unique id with default complete status set to false', () => {
    const toDoList = new ToDoList()

    expect(toDoList.create('Learn to code')).toEqual({
      id: 1,
      text: 'Learn to code',
      complete: false
    })
  })
})
