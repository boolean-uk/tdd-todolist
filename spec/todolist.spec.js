const TodoList = require('../src/todolist.js')

describe('Todo list', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('creates a todo item', () => {
    const expected = {
      text: 'exercise',
      id: 1,
      status: 'incomplete'
    }

    const result = todoList.create('exercise')

    expect(result).toEqual(expected)
  })

  it('gets all items', () => {
    const item1 = {
      text: 'exercise',
      id: 1,
      status: 'incomplete'
    }
    const item2 = {
      text: 'wash pots',
      id: 2,
      status: 'incomplete'
    }

    const expected = [item1, item2]

    todoList.create('exercise')
    todoList.create('wash pots')

    expect(todoList.getAll()).toEqual(expected)
  })

  it('sets status of todo item as complete if found', () => {
    const item1 = todoList.create('exercise')
    const expected = {
      text: 'exercise',
      id: 1,
      status: 'complete'
    }

    const result = todoList.setComplete(item1.id)

    expect(result).toEqual(expected)
  })
})
