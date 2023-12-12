const { todoList, createTodo } = require('../src/todolist.js')

describe('Todo List', () => {
  it('returns new todo item as an object', () => {
    const text = 'new todo'
    const newToDo = createTodo(text)
    expect(newToDo).toEqual({ id: 1, text: 'new todo', status: 'incomplete' })
  })

  it('user can only enter a string as the todo text description', () => {
    const text = 1
    const newToDo = createTodo(text)
    expect(newToDo).toEqual('text value must be a valid string')
  })
})
