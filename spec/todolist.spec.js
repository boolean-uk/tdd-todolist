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
  })
  it('should create new todos with incrementing IDs', () => {
    const todo1 = todoList.createTodo('complete bobs bagels exercise')
    expect(todo1.id).toBe(1)
    expect(todoList.todos.length).toBe(1)
  })
})