const { TodoList } = require('../src/todolist')

describe('Test of TodoList class', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  it('adds new Todo', () => {
    todoList.newTodo('do something')
    expect(todoList.todos[0]).toEqual({ text: 'do something' })
  })
})
