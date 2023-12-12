const { todoList, createTodo } = require('../src/todolist.js')

describe('Todo List', () => {
  it('return new todo if data entered', () => {
    const text = 'new todo'
    const newToDo = createTodo(text)
    expect(newToDo).toEqual({ id: 1, text: 'new todo', status: 'incomplete' })
  })
})
