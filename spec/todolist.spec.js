const { TodoList } = require('../src/todolist')

describe('todoList', () => {
  let todoList 
  beforeEach(()=>{
    todoList = new TodoList()
  })

  it('should define todoList', () => {
    expect(todoList).toBeDefined()
  })

  it('Create a todo item that has an ID, text description, and starts off incomplete', () => {
    const todoItem = 'Do something'
    expect(todoList.create(todoItem)).toEqual({
      id: 1,
      description: 'Do something',
      status: 'incomplete'
    })
  })

  it('get all todo items', ()=>{
    todoList.create('google code')
    todoList.create('to code facebook')
    expect(todoList.getAlltodo()).toHaveSize(2)
  })

  it('completed todo by its id', ()=>{
    todoList.create('be happy')
    expect(todoList.completedTodo()).toEqual([
      { id:1, description: 'be happy', status: true}
    ])
  })
})

