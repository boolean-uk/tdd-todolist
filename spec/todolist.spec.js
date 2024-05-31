import TodoList from '../src/todolist.js'

describe('TodoList', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  it('should exist', () => {
    expect(todoList).toBeInstanceOf(TodoList)
  })
})

it('should create a new todo', () => {
  const todo = todoList.create('make tea')

  expect(todo.id).toBe(1)
  expect(todo.text).toBe('make tea')
  expect(todo.isComplete).toBe(false)
})
