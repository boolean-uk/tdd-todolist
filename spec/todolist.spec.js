import { TodoItem, TodoList } from '../src/todolist.js'

describe('todoItem', () => {
  it('should have an id, string, and status', () => {
    const todoItem = new TodoItem()
    expect(todoItem.id).toBe(1)
    expect(todoItem.todo).toBe('complete todo list')
    expect(todoItem.status).toBe('incomplete')
  })
  it('should change status to complete if todo is set to true', () => {
    const todoItem = new TodoItem(1, 'String', 'incomplete')
    expect(todoItem.status).toBe('incomplete')
    const completedTodo = todoItem.setComplete('complete')
    expect(completedTodo.status).toBe('complete')
  })
})

describe('todoList', () => {
  it('should create a new ID for each todo', () => {
    const todo1 = tod
  })
  it('should show all todos', () => {
    const todoList = new TodoList()
    expect(todoList.todos.length).toBe(0)

    const addTodo = new TodoItem(1, ' ', 'incomplete')
    const list = todoList.add(addTodo)
    expect(todoList.todos.length).toBe(1)
    expect(list.length).toBe(1)
  })
  it('should get all todos that are incomplete', () => {
    const incomplete = new TodoList([new TodoItem('incomplete')])
    expect(incomplete.find('incomplete' || 'complete')).toBeTrue()
  })
  it('should find a todo by ID', () => {
    const getTodo = new TodoList([new TodoItem(1)])
    expect(getTodo.search(1)).toBeTrue()
    expect(getTodo.search(undefined)).toBe('Todo item not found')
  })
})
