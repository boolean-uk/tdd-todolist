const { TodoList, TodoItem } = require('../src/todolist')

// Create Todo Item
describe('Create Todo Item', () => {
  it('with incomplete status', () => {
    const description = 'Go to shop and buy some milk'

    const todoItem = new TodoItem(description)

    expect(todoItem.description).toEqual(description)
    expect(todoItem.status).toEqual('incomplete')
  })
})

// Create Todo List
describe('Create Todo List', () => {
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

// Get All Todo
describe('Get All Todo', () => {
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

// Set Todo Complete
describe('Set Todo Complete', () => {
  it('should return true', () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)

    const res1 = todoList.setTodoComplete(2)
    const res2 = todoList.setTodoComplete(1)

    const allTodo = todoList.getAllTodo()

    expect(res1).toBeTrue()
    expect(res2).toBeTrue()
    expect(allTodo[0].status).toEqual('complete')
    expect(allTodo[1].status).toEqual('complete')
    expect(allTodo[2].status).toEqual('incomplete')
  })

  it('should return error message because id of todo not exist', () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)

    const res = todoList.setTodoComplete(5)

    expect(res).toEqual('Todo not found')
  })
})

// Get Incomplete Todo List
describe('Get Incomplete Todo List', () => {
  it('has incomplete todo and has to show them', () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)

    todoList.setTodoComplete(2)
    todoList.setTodoComplete(3)

    const res = todoList.getIncompleteTodo()

    expect(res[0].id).toEqual(1)
    expect(res[0].description).toEqual('Todo 1')
    expect(res[0].status).toEqual('incomplete')
  })

  it(`hasn't incomplete todo and has to show error message`, () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)

    todoList.setTodoComplete(1)
    todoList.setTodoComplete(2)
    todoList.setTodoComplete(3)

    const res = todoList.getIncompleteTodo()

    expect(res).toEqual('All todo was completed')
  })
})

// Get Complete Todo List
describe('Get Complete Todo List', () => {
  it('has complete todo and has to show them', () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)

    todoList.setTodoComplete(2)

    const res = todoList.getCompletedTodo()

    expect(res[0].id).toEqual(2)
    expect(res[0].description).toEqual('Todo 2')
    expect(res[0].status).toEqual('complete')
  })

  it(`hasn't complete todo and has to show error message`, () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)

    const res = todoList.getCompletedTodo()

    expect(res).toEqual('You have no one completed todo')
  })
})

// Search Todo
describe('Search Todo', () => {
  it('has exist id of todo and has to show that todo', () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)
    todoList.createTodo('Todo 4', 4)
    todoList.createTodo('Todo 5', 5)
    todoList.createTodo('Todo 6', 6)

    const res = todoList.searchTodo(5)

    expect(res.id).toEqual(5)
    expect(res.description).toEqual('Todo 5')
    expect(res.status).toEqual('incomplete')
  })

  it(`hasn't exist id of todo and has to show the error message`, () => {
    const todoList = new TodoList()

    todoList.createTodo('Todo 1', 1)
    todoList.createTodo('Todo 2', 2)
    todoList.createTodo('Todo 3', 3)
    todoList.createTodo('Todo 4', 4)
    todoList.createTodo('Todo 5', 5)
    todoList.createTodo('Todo 6', 6)

    const res = todoList.searchTodo(25)

    expect(res).toEqual(`Todo doesn't exist`)
  })
})
