const { TodoList } = require('../src/todolist')

describe('create new list', () => {
  it('creating a new list', () => {
    const expectedResult = { title: 'Test', items: [] }
    expect(JSON.stringify(new TodoList('Test'))).toEqual(
      JSON.stringify(expectedResult)
    )
  })

  it('empty title produces a title = untitled', () => {
    const expectedResult = { title: 'untitled', items: [] }
    expect(JSON.stringify(new TodoList(''))).toEqual(
      JSON.stringify(expectedResult)
    )
  })
})

describe('adding items', () => {
  const myList = new TodoList('My List')
  it('adding item to list', () => {
    expect(myList.create('Do homework').description).toEqual('Do homework')
  })

  it('empty description returns false', () => {
    expect(myList.create('')).toEqual(false)
  })
})

describe('marking items as complete / incomplete', () => {
  const myList = new TodoList('My List')
  myList.create('New item')
  myList.create('New item')
  myList.create('New item')

  it('toggling item id = 2', () => {
    expect(myList.setComplete(2).complete).toEqual(true)
  })

  it('toggling an id that does not exist returns false', () => {
    expect(myList.setComplete(6)).toEqual('Todo item not found')
  })
})

describe('getting all items', () => {
  it('creating list has an empty array, initially', () => {
    const myList = new TodoList('My List')
    expect(myList.getAll()).toEqual([])
  })

  it('list has two items in it', () => {
    const myList = new TodoList('My List')
    const expectedContents = [
      { id: 1, description: 'do laundry', complete: false },
      { id: 2, description: 'make the bed', complete: true }
    ]
    myList.create('do laundry')
    myList.create('make the bed')
    myList.setComplete(2)

    expect(myList.getAll()).toEqual(expectedContents)
  })
})
