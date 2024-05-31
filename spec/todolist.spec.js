import TodoList from '../src/todolist.js'

describe('TodoList', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  it('should exist', () => {
    expect(todoList).toBeInstanceOf(TodoList)
  })

  it('should create a new todo', () => {
    const todo = todoList.create('make tea')

    expect(todo.id).toBe(1)
    expect(todo.text).toBe('make tea')
    expect(todo.isComplete).toBe(false)
  })

  it('should create multiple todos with incrementing IDs', () => {
    const todo1 = todoList.create('make tea')
    const todo2 = todoList.create('drink tea')

    expect(todo1.id).toBe(1)
    expect(todo1.text).toBe('make tea')
    expect(todo1.isComplete).toBe(false)

    expect(todo2.id).toBe(2)
    expect(todo2.text).toBe('drink tea')
    expect(todo2.isComplete).toBe(false)

    expect(todoList.todos.length).toBe(2)
  })

  it('should get all todos', () => {
    todoList.create('make tea')
    todoList.create('drink tea')
    const todos = todoList.getAll()

    expect(todos.length).toBe(2)
    expect(todos[0].text).toBe('make tea')
    expect(todos[1].text).toBe('drink tea')
  })
  //---
})
