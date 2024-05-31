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

  it('should set a todo.isComplete to true', () => {
    const todo = todoList.create('make tea')

    expect(todo.isComplete).toBe(false)

    const isDone = todoList.setComplete(1)

    expect(todo.isComplete).toBe(true)
  })

  it('should throw an error if todo is not found', () => {
    expect(todoList.setComplete(8)).toBe('Todo item not found')
  })

  it('should get a todo by id', () => {
    todoList.create('make tea')
    todoList.create('drink tea')

    expect(todoList.getTodo(2).text).toBe('drink tea')
  })

  it('should throw an error if todo is not found', () => {
    expect(todoList.getTodo(8)).toBe('Todo item not found')
  })

  it('should get all completed todos', () => {
    todoList.create('make tea')
    todoList.create('drink tea')

    todoList.setComplete(1)
    todoList.setComplete(2)

    const completedTodos = todoList.getComplete()
    expect(completedTodos.length).toBe(2)
    expect(completedTodos[0].text).toBe('make tea')
    expect(completedTodos[1].text).toBe('drink tea')
  })
  //---
})
