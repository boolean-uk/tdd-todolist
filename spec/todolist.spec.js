const { Item, TodoList } = require('../src/todolist.js')

describe('item', () => {
  it('should have an id, description and be incomplete', () => {
    const item = new Item('something')

    expect(item.description).toBe('something')
    expect(item.isCompleted).toBe('incomplete')
  })
})

describe('todo list', () => {
  it('should add items to todo list', () => {
    const todoList = new TodoList()

    expect(todoList.todos.length).toBe(0)

    const itemToAdd = new Item('a test')
    const result = todoList.createTodo(itemToAdd)

    expect(todoList.todos.length).toBe(1)
    expect(result.length).toBe(1)
    expect(result[0]).toEqual(itemToAdd)
  })

  it('should get all todos', () => {
    const todoList = new TodoList()
    const itemToAdd = new Item('a test')
    const itemToAdd2 = new Item('other test')
    todoList.createTodo(itemToAdd)
    todoList.createTodo(itemToAdd2)

    const result = todoList.getAll()
    expect(result.length).toBe(2)
  })
})
