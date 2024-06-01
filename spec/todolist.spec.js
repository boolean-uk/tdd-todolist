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
    const todo = todoList.createTodo('complete bobs bagels exercise')
    expect(todo.id).toBe(1)
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
  it('should get todo by id', () => {
    todoList.createTodo('complete todo list')
    expect(todoList.getById(1).title).toEqual('complete todo list')
  })
  it('should throw an error if the id is not found', () => {
    expect(() => todoList.setComplete(6)).toThrow('todo not found')
  })
  it('should all todos by status', () => {
    todoList.createTodo('complete todo list')
    todoList.createTodo('complete bobs bagels exercise')

    todoList.setComplete(1)
    todoList.setComplete(2)
    const expected = todoList.getByStatus('complete')
    expect(expected.length).toBe(2)
    expect(expected[0].title).toEqual('complete todo list')
    expect(expected[1].title).toEqual('complete bobs bagels exercise')
  })
  it('should remove a todo by its id', () => {
    todoList.createTodo('complete todo list')
    todoList.createTodo('complete bobs bagels exercise')

   expect(todoList.getAll().length).toBe(2)

   const expected = todoList.removeTodo(2)
   expect(expected.title).toBe('complete bobs bagels exercise')

   const newlist = todoList.getAll()
   expect(newlist.length).toBe(1)
   expect(newlist[0].title).toBe('complete todo list')
  })
})