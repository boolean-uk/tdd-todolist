const { Todo, TodoList } = require('../src/todolist.js')

describe('TodoList', () => {
  it('should create a todo item with ID, text description, and start off incomplete', () => {
    const todoList = new TodoList()
    const todoText = 'Complete TDD test'

    const todo = todoList.create(todoText)

    expect(todo).toBeInstanceOf(Todo)
    expect(todo.id).toBe(1)
    expect(todo.text).toBe(todoText)
    expect(todo.completed).toBe(false)
  })

  it('should get all todo items', () => {
    const todoList = new TodoList()
    const todo1 = todoList.create('Complete TDD test')
    const todo2 = todoList.create('Implement get all todos')

    const allTodos = todoList.getAll()

    expect(allTodos).toHaveLength(2)
    expect(allTodos).toContainEqual(todo1)
    expect(allTodos).toContainEqual(todo2)
  })

  it('should set a todo as completed by its ID', () => {
    const todoList = new TodoList()
    const todo = todoList.create('Complete task')

    todoList.setCompletedById(todo.id)

    const updatedTodo = todoList.getAll()[0]
    expect(updatedTodo.completed).toBe(true)
  })

  it('should get only incomplete todo items', () => {
    const todoList = new TodoList()
    const todo1 = todoList.create('Incomplete task 1')
    const todo2 = todoList.create('Complete task 2')
    todoList.setCompletedById(todo2.id) // Marking todo2 as completed

    const incompleteTodos = todoList.getIncomplete()

    expect(incompleteTodos).toHaveLength(1)
    expect(incompleteTodos).toContainEqual(todo1)
    expect(incompleteTodos).not.toContainEqual(todo2)
  })

  it('should get only complete todo items', () => {
    const todoList = new TodoList()
    const todo1 = todoList.create('Incomplete task 1')
    const todo2 = todoList.create('Complete task 2')
    todoList.setCompletedById(todo2.id) // Marking todo2 as completed

    const completeTodos = todoList.getComplete()

    expect(completeTodos).toHaveLength(1)
    expect(completeTodos).toContainEqual(todo2)
    expect(completeTodos).not.toContainEqual(todo1)
  })

  it('should search and return a todo item by its ID', () => {
    const todoList = new TodoList()
    const todo = todoList.create('Searchable task')
    const searchedTodo = todoList.getById(todo.id)

    expect(searchedTodo).toBe(todo)
  })

  it('should return a message if the todo item does not exist', () => {
    const todoList = new TodoList()
    const searchedTodo = todoList.getById(100)

    expect(searchedTodo).toBe('Todo not found')
  })
})
