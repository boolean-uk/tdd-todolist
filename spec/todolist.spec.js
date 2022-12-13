const { TodoList } = require('../src/todolist')

describe('Test of TodoList class', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  it('expects newTodo to return nothing if empty value is given to it', () => {
    todoList.newTodo('')
    todoList.newTodo(null)
    expect(todoList.todos.length).toBe(0)
  })
  it('expects newId of newTodo() to always be new', () => {
    console.log(todoList.newTodo('first todo'))
    console.log(todoList.newTodo('second todo'))
    const secondTodo = todoList.todos[1]
    expect(secondTodo.id).toBe(2)
  })

  it('expects newTodo to push to this.todos', () => {
    todoList.newTodo('do something')
    expect(todoList.todos[0]).toEqual({ text: 'do something' })
  })
})
