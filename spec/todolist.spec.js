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

  it('should get incomplete todos', () => {
    const todo = new TodoList()
    todo.create('eat')
    todo.create('watch tv')
    todo.setComplete(2)

    expect(todo.getIncomplete()).toEqual([
      { id: 1, title: 'eat', status: 'incomplete' }
    ])
  })

  it('should get completed todos', () => {
    const todo = new TodoList()
    todo.create('play football')
    todo.create('watch youtube')
    todo.create('do homework')
    todo.setComplete(1)
    todo.setComplete(3)

    expect(todo.getComplete()).toEqual([
      { id: 1, title: 'play football', status: 'completed' },
      { id: 3, title: 'do homework', status: 'completed' }
    ])
  })

  it('should search a todo item', () => {
    const todo = new TodoList()
    todo.create('skydiving')
    todo.create('learn how to cook')
    todo.setComplete(1)

    expect(todo.search(1)).toEqual({
      id: 1,
      title: 'skydiving',
      status: 'completed'
    })

    expect(todo.search(3)).toBe('The todo searched does not exists')
  })

  it('should remove a todo item', () => {
    const todo = new TodoList()
    todo.create('read a book')
    todo.create('ride a bike')
    todo.create('make pasta')
    todo.setComplete(2)

    expect(todo.remove(2)).toEqual({
      id: 2,
      title: 'ride a bike',
      status: 'completed'
    })
    expect(todo.getAll()).toEqual([
      { id: 1, title: 'read a book', status: 'incomplete' },
      { id: 3, title: 'make pasta', status: 'incomplete' }
    ])
  })
})
