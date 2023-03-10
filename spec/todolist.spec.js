const ToDoList = require(`../src/todolist.js`)

describe('ToDoList class', () => {
  let todoList
  let expectedArray
  beforeEach(() => {
    todoList = new ToDoList()
    expectedArray = []
  })
  // testing adding new todos
  it('should add a todo', () => {
    // setup
    // execute
    todoList.createToDo('Check the mailbox.')
    // verify
    expectedArray.push({ id: 0, text: 'Check the mailbox.', complete: false })
    expect(todoList.itemsArray).toEqual(expectedArray)
  })

  // testing getting all todos
  it('should return the full list of items', () => {
    // setup
    todoList.createToDo('Check the mailbox.')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    expectedArray.push({ id: 0, text: 'Check the mailbox.', complete: false })
    expectedArray.push({ id: 1, text: 'Feed the cat', complete: false })
    expectedArray.push({ id: 2, text: 'Feed the dog', complete: false })
    // execute
    const result = todoList.getAllItems()
    // verify
    expect(result.length).toEqual(3)
    expect(result).toEqual(expectedArray)
  })

  // testing changing to complete

  // testing  getting all incompletes
  // testing  getting all completes
  // testing  getting an item by its ID
  // testing removal via ID
})
