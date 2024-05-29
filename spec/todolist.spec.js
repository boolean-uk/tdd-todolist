import { TodoItem, TodoList } from '../src/todolist.js'

describe('todoItem', () => {
  it('should have an id, string, and status', () => {
    const todoItem = new TodoItem(Number, 'String', false)
    expect(todoItem.id).toBe(Number)
    expect(todoItem.todo).toBe('String')
    expect(todoItem.status).toBe(false)
  })
  it('should change status to complete if todo is set to true', () => {
    const todoItem = new TodoItem(Number, 'String', true)
    expect(todoItem.status).toBe(true)
    const isComplete = new TodoItem(Number, 'String', true)
    expect(isComplete.status).toBe(true)
    const completedTodo = todoItem.setComplete(isComplete)
    expect(completedTodo.status).toBe(true)
  })
})

describe('todoList', () => {
  it('should show all todos', () => {
    const todoList = new TodoList()
    expect(todoList.todos.length).toBe(0)

    const addTodo = new TodoItem(Number, ' ', false)
    const list = todoList.add(addTodo)
    expect(todoList.todos.length).toBe(1)
    expect(list.length).toBe(1)
  })
})
