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
})
