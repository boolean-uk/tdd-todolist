import { TodoItem, TodoList } from '../src/todolist.js'

describe('todoItem', () => {
  it('should have an id, string, and status', () => {
    const todoItem = new TodoItem(Number, 'String', Boolean)
    expect(todoItem.id).toBe(Number)
    expect(todoItem.todo).toBe('String')
    expect(todoItem.status).toBe(Boolean)
  })
})

describe('todoList', () => {
  it('should show all todos', () => {
    const todoList = new TodoList()

    expect(todoList.todos.length).toBe(0)
  })
})
