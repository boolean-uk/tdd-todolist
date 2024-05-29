const TodoList = require('../src/todolist.js')

describe('todo list', () => {
  it('should create a todo item', () => {
    const todo = new TodoList()

    expect(todo.create('work out')).toEqual({
      id: 1,
      title: 'work out',
      status: 'incomplete'
    })
  })

  it('should get all todos', () => {
    const todo = new TodoList()
    todo.create('work out')
    todo.create('play games')

    expect(todo.getAll()).toEqual([
      { id: 1, title: 'work out', status: 'incomplete' },
      { id: 2, title: 'play games', status: 'incomplete' }
    ])
  })

  it('should set a todo completed', () => {
    const todo = new TodoList()
    todo.create('study')

    expect(todo.setComplete(1)).toEqual({
      id: 1,
      title: 'study',
      status: 'completed'
    })
  })
})
