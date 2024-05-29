/* eslint-disable prettier/prettier */
import { ToDoList } from '../src/todolist.js'
import 'jasmine-expect'

describe('To Do List', () => {
  it('To do list should have a create function that adds a new ToDo and adds an unique id with default complete status set to false', () => {
    const toDoList = new ToDoList()

    expect(toDoList.create('Learn to code').text).toEqual('Learn to code')
  })

  it('To do list should be able to return all todo items', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')

    expect(toDoList.getAllToDos().length).toEqual(2)
  })

  it('To do list should be able to set a todo as complete from its ID', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')

    expect(toDoList.setComplete(2).complete).toEqual(true)
  })

  it('If user attempts to set a non-existant todo as complete, it should return "Item not found"', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')

    expect(toDoList.setComplete(3)).toEqual('Item not found')
  })

  it('Should return all complete items', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')
    toDoList.create('Learn to code betterer')

    toDoList.setComplete(1)
    toDoList.setComplete(2)

    expect(toDoList.getAllComplete().filter((todo) => todo.complete).length).toEqual(2)
  })

  it('Should return all incomplete items', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')
    toDoList.create('Learn to code betterer')

    toDoList.setComplete(1)

    expect(toDoList.getAllIncomplete().filter((todo) => !todo.complete).length).toEqual(2)
})

  it('Should return an item by ID', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')
    toDoList.create('Learn to code betterer')

    expect(toDoList.find(2).text).toEqual('Learn to code better')
  })

  it('Should delete a todo by ID', () => {
    const toDoList = new ToDoList()

    toDoList.create('Learn to code')
    toDoList.create('Learn to code better')
    toDoList.create('Learn to code betterer')

    expect(toDoList.remove(2).filter((todo) => todo.text !== 'Learn to code better').length).toEqual(2)
  })
})
