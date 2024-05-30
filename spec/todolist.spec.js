import { TodoItem, TodoList } from '../src/todolist.js'

describe('TodoList', () => {
    let todoList
    beforeEach(() => {
      todoList = new TodoList()
    })
  it('should exist', () => {
    expect(todoList).toBeInstanceOf(TodoList)
  })
  it('should create a new todo', () => {
    const todoItem = todoList.createTodo('complete todo list')
    expect(todoItem).toBeInstanceOf(TodoItem)
    expect(todoItem.id).toBe(1)
    expect(todoItem.title).toBe('complete todo list')
    expect(todoItem.status).toBe('incomplete')
  })
  it('should create new todos with incrementing IDs', () => {
    const todo1 = todoList.createTodo('complete bobs bagels exercise')
    expect(todo1.id).toBe(1)
    expect(todoList.todos.length).toBe(1)
  })
  it('should get all todos in todo array', () => {
    todoList.createTodo('complete todo list')
    todoList.createTodo('complete bobs bagels exercise')

    const allTodo = todoList.getAll()
    expect(allTodo.length).toBe(2)
    expect(allTodo[0].title).toBe('complete todo list')
    expect(allTodo[1].title).toBe('complete bobs bagels exercise')
  })
  it('should set a todo to complete', () => {
    const todo = todoList.createTodo('complete todo list')
    expect(todo.status).toBe('incomplete')

    const newStatus = todoList.setComplete(1)
    expect(newStatus.status).toBe('complete')
  })
})