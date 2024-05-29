const { Item, TodoList } = require('../src/todolist.js')

describe('item', () => {
  it('should have an id, description and be incomplete', () => {
    const item = new Item(0, 'something')

    expect(item.description).toBe('something')
    expect(item.isCompleted).toBe('incomplete')
    expect(item.id).toBe(1)
  })
})

describe('todo list', () => {
  it('should add items to todo list', () => {
    const todoList = new TodoList()

    expect(todoList.todos.length).toBe(0)

    const result = todoList.createTodo('something')

    expect(todoList.todos.length).toBe(1)
    expect(result.length).toBe(1)
  })

  it('should get all todos', () => {
    const todoList = new TodoList()

    todoList.createTodo('test')
    todoList.createTodo('another test')

    const result = todoList.getAll()
    expect(result.length).toBe(2)
  })

  it('should set todo to completed', () => {
    const todoList = new TodoList()

    todoList.createTodo('test')
    todoList.createTodo('another test')

    todoList.setComplete(2)
    expect(todoList.todos[1].isCompleted).toBe('complete')

    todoList.setComplete(3)
    expect(todoList.setComplete()).toBe(false)
  })

  it('should find todo and return it', () => {
    const todoList = new TodoList()

    todoList.createTodo('test')
    todoList.createTodo('another test')

    todoList.findTodo(2)
    expect(todoList.found.id).toBe(2)

    todoList.findTodo(3)
    expect(todoList.findTodo()).toBe(false)
  })
})
