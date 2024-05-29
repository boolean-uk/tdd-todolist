/* eslint-disable prettier/prettier */
import { ToDoList } from '../src/todolist.js'
import 'jasmine-expect'

describe('To Do List', () => {
  it('To do list should have a create function that adds a new ToDo and adds an unique id with default complete status set to false', () => {
    const toDoList = new ToDoList()

    expect(toDoList.create('Learn to code')).toEqual({
      id: 1,
      text: 'Learn to code',
      complete: false
    })
  })

  it('To do list should be able to return all todo items', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')

    expect(toDoList.getAllToDos()).toEqual([
      { id: 1, text: 'Learn to code', complete: false },
      { id: 2, text: 'Learn to code better', complete: false }
    ])
  })
})
