import TodoList, { Todo } from '../src/todolist.js'

describe('To doList', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  it('should exist', () => {
    expect(todoList).toBeInstanceOf(TodoList)
  })

  it('should create a new todo', () => {
    const result = todoList.create('complete exercise')

    expect(result).toBeInstanceOf(Todo)
    expect(result.id).toBe(1)
    expect(result.text).toBe('complete exercise')
    expect(result.status).toBe('incomplete')
  })

  it('should create multiple todos with incrementing IDs', () => {
    const result1 = todoList.create('complete exercise')
    const result2 = todoList.create('work out')

    expect(result1.id).toBe(1)
    expect(result1.text).toBe('complete exercise')
    expect(result1.status).toBe('incomplete')

    expect(result2.id).toBe(2)
    expect(result2.text).toBe('work out')
    expect(result2.status).toBe('incomplete')

    expect(todoList.todos.length).toBe(2)
  })

  it('should get all todos', () => {
    todoList.create('complete exercise')
    todoList.create('work out')
    const result = todoList.getAll()

    expect(result.length).toBe(2)
    expect(result[0].text).toBe('complete exercise')
    expect(result[1].text).toBe('work out')
  })
})
