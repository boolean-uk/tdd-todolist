const { TodoList, TodoItem } = require('../src/todolist')

describe('Create Todo Item', () => {
  it('with incomplete status', () => {
    const description = 'Go to shop and buy some milk'

    const todoItem = new TodoItem(description)

    expect(todoItem.description).toEqual(description)
    expect(todoItem.status).toEqual('incomplete')
  })
})

describe('Create Todo', () => {
  it('should return object of created todo', () => {
    // Setup
    const todoList = new TodoList()

    // Execute
    const res = todoList.createTodo('Go to the shop and buy some milk')

    // Verify
    expect(res.description).toEqual('Go to the shop and buy some milk')
    expect(res.status).toEqual('incomplete')
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

describe('Get All Todos', () => {
  it('has to show list with 2 created todos', () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1')
    todoList.createTodo('Todo 2')

    const res = todoList.getAllTodo()

    expect(res[0].description).toEqual('Todo 1')
    expect(res[0].status).toEqual('incomplete')
    expect(res[1].description).toEqual('Todo 2')
    expect(res[1].status).toEqual('incomplete')
  })

  it('has to show empty list', () => {
    const todoList = new TodoList()

    const res = todoList.getAllTodo()

    expect(res).toEqual('Todo list is empty')
  })
})
