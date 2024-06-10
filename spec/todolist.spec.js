const { TodoList } = require('../src/todolist')

describe('Todo List', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('should create a todo item with an ID, description, and incomplete status', () => {
    const todo = todoList.addTodo('Test todo item')
    expect(todo.id).toBeDefined()
    expect(todo.description).toBe('Test todo item')
    expect(todo.completed).toBe(false)
  })

  it('should get all todo items', () => {
    todoList.addTodo('Test todo item 1')
    todoList.addTodo('Test todo item 2')
    const todos = todoList.getTodos()
    expect(todos.length).toBe(2)
  })

  it('should set a todo item as completed by its ID', () => {
    const todo = todoList.addTodo('Test todo item')
    todoList.setTodoCompleted(todo.id)
    const updatedTodo = todoList.searchTodoById(todo.id)
    expect(updatedTodo.completed).toBe(true)
  })

  it('should get only incomplete todo items', () => {
    todoList.addTodo('Test todo item 1')
    const todo2 = todoList.addTodo('Test todo item 2')
    todoList.setTodoCompleted(todo2.id)
    const incompleteTodos = todoList.getIncompleteTodos()
    expect(incompleteTodos.length).toBe(1)
    expect(incompleteTodos[0].description).toBe('Test todo item 1')
  })

  it('should get only complete todo items', () => {
    const todo1 = todoList.addTodo('Test todo item 1')
    const todo2 = todoList.addTodo('Test todo item 2')
    todoList.setTodoCompleted(todo2.id)
    const completeTodos = todoList.getCompleteTodos()
    expect(completeTodos.length).toBe(1)
    expect(completeTodos[0].description).toBe('Test todo item 2')
  })

  it('should search and return a todo item by its ID', () => {
    const todo = todoList.addTodo('Test todo item')
    const foundTodo = todoList.searchTodoById(todo.id)
    expect(foundTodo).toEqual(todo)
  })

  it('should return a message if a todo item does not exist', () => {
    const result = todoList.searchTodoById(999)
    expect(result).toBe('Todo item not found')
  })

  it('should remove a todo item by its ID', () => {
    const todo = todoList.addTodo('Test todo item')
    todoList.removeTodoById(todo.id)
    const todos = todoList.getTodos()
    expect(todos.length).toBe(0)
  })
})
