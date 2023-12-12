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
