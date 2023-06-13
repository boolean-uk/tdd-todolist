const { TodoItem, TodoList } = require('../src/todos.js')

describe('Testing TodoItem Class', () => {
  it('New todos have an ID, text and status === incomplete', () => {
    // Setup
    const items = new TodoItem(1, 'item 1')
    // Execution
    const expectedId = 1
    const expectedText = 'item 1'
    const expectedStatus = 'incomplete'
    // Check
    expect(items.id).toEqual(expectedId)
    expect(items.text).toEqual(expectedText)
    expect(items.status).toEqual(expectedStatus)
  })
})

describe('Testing createTodoItem', () => {
  it('New todo items are added to an array with next available ID', () => {
    // Setup
    const items = [new TodoItem(1, 'item 1')]
    const list = new TodoList(items)
    // Execution
    const expectedResult = [
      new TodoItem(1, 'item 1'),
      new TodoItem(2, 'item 2')
    ]
    list.createTodoItem('item 2')
    // Check
    expect(list.todoList).toEqual(expectedResult)
    expect(list.todoList[1].id).toBe(2)
  })

  it('createTodoItem fails if no text is given', () => {
    // Setup
    const items = [new TodoItem(1, 'item 1')]
    const list = new TodoList(items)
    // Execution
    const result = list.createTodoItem('')
    // Check
    expect(result).toBe(false)
  })

  it('createTodoItem works when list is empty', () => {
    // Setup
    const list = new TodoList([])
    // Execution
    const expectedResult = [new TodoItem(1, 'item 1')]
    list.createTodoItem('item 1')
    // Check
    expect(list.todoList).toEqual(expectedResult)
  })
})

describe('Testing getAllTodos', () => {
  it('Returns false if todoList is empty', () => {
    // Setup
    const list = new TodoList([])
    // Execution
    const result = list.getAllTodos()
    // Check
    expect(result).toBe(false)
  })

  it('Returns todoList if todoList is not empty', () => {
    // Setup
    const items = [
      new TodoItem(1, 'item 1'),
      new TodoItem(2, 'item 2'),
      new TodoItem(3, 'item 3')
    ]
    const list = new TodoList(items)
    // Execution
    const expectedResult = items
    const result = list.getAllTodos()
    // Check
    expect(result).toEqual(expectedResult)
  })
})

describe('Testing toggleStatus, getComplete and getIncomplete', () => {
  it('Get all Complete todos', () => {
    // Setup
    const items = [
      new TodoItem(1, 'item 1'),
      new TodoItem(2, 'item 2'),
      new TodoItem(3, 'item 3')
    ]
    const list = new TodoList(items)
    // Execution
    list.toggleStatus(2)
    const result = list.getComplete()
    // Check
    expect(result.length).toBe(1)
  })

  it('Get all Incomplete todos', () => {
    // Setup
    const items = [
      new TodoItem(1, 'item 1'),
      new TodoItem(2, 'item 2'),
      new TodoItem(3, 'item 3')
    ]
    const list = new TodoList(items)
    // Execution
    list.toggleStatus(1)
    const result = list.getIncomplete()
    // Check
    expect(result.length).toBe(2)
  })
})

    // Setup

    // Execution

    // Check
