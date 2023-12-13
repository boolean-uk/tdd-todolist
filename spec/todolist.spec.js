const { TodoList } = require('../src/todolist')

describe('Create Todo', () => {
  it('should return object of created todo', () => {
    // Setup
    const todoList = new TodoList()

    // Execute
    const res = todoList.createTodo('Go to the shop and buy some milk')

    // Verify
    expect(res).toEqual({
      ID: '1',
      description: 'Go to the shop and buy some milk',
      status: 'incomplete'
    })
  })

  it(`should return message "Enter your todo's description for create new todo"`, () => {
    // Setup
    const todoList = new TodoList()

    // Execute
    const res = todoList.createTodo('')

    // Verify
    expect(res).toEqual(`Enter your todo's description for create new todo`)
  })
})
