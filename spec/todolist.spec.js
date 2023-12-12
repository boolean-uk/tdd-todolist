const {
  createToDo,
  getToDos,
  getIncompleteToDos,
  getCompletedTodos,
  findToDoByID,
  removeToDo
} = require('../src/todolist.js')

describe('create new todo', () => {
  it('the todo item is created successfully', () => {
    const newToDo = { id: 1, text: 'do the dishes', complete: false }
    const result = createToDo(newToDo)
    expect(result).toEqual('do the dishes')
  })

  it('the todo item was not created - missing input!', () => {
    const newToDo = { id: 1, text: '', complete: false }
    const result = createToDo(newToDo)
    expect(result).toEqual('failed to create todo')
  })
})

describe('get todo list', () => {
  it('the todo list is shown as a string listing all its items', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const result = getToDos(todoList)

    const expected = [
      { id: 1, text: 'buy coffee beans', complete: false },
      { id: 2, text: 'make coffee', complete: false },
      { id: 3, text: 'drink coffe', complete: false },
      { id: 4, text: 'type some code', complete: false }
    ]

    expect(result).toEqual(expected)
  })

  it('the todo list is empty', () => {
    const todoList = []
    const result = getToDos(todoList)
    expect(result).toEqual('no todos added yet')
  })
})
