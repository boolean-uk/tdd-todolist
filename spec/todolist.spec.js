const { TodoList, TodoItem } = require('../src/todos.js')

describe('Create a TodoItem', () => {
  it('TodoItem has ID', () => {
    // Setup
    const testItem = new TodoItem(1, 'text')
    // Execution
    const result = 1
    // Check
    expect(testItem.id).toEqual(result)
  })

  it('TodoItem has text', () => {
    // Setup
    const testItem = new TodoItem(1, 'text')
    // Execution
    const result = 'text'
    // Check
    expect(testItem.text).toEqual(result)
  })

  it('TodoItem has completed === false', () => {
    // Setup
    const testItem = new TodoItem(1, 'text')
    // Execution
    const result = false
    // Check
    expect(testItem.completed).toEqual(result)
  })
})

describe('Get All TodoItems', () => {
  it('TodoList has items', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.getAllTodos()

    // Check
    expect(result).toEqual(testItems)
  })
})
