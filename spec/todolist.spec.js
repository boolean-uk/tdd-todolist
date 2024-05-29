const TodoList = require('../src/todolist.js')

describe('todo list', () => {
  it('should create a todo item', () => {
    const todo = new TodoList()

    expect(todo.create('work out')).toEqual({
      id: todo.id,
      title: 'work out',
      status: todo.status
    })
  })
})
