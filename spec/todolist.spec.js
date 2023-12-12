const { TodoList } = require('../src/todolist')

describe('create new list', () => {
  it('creating a new list', () => {
    const expectedResult = { title: "Test", 'items': [] }
    expect(JSON.stringify(new TodoList("Test"))).toEqual(JSON.stringify(expectedResult))
  })

  it('empty title produces a title = untitled', () => {
    const expectedResult = { title: "untitled", 'items': [] }
    expect(JSON.stringify(new TodoList(""))).toEqual(JSON.stringify(expectedResult))
  })
})


describe('adding items', () => {
  const myList = new TodoList("My List")
  it('adding item to list', () => {
    expect(myList.createTodo("Do homework")).toEqual(true)
  })

  it("empty description returns false", () => {
    expect(myList.createTodo('')).toEqual(false)
  })
})

describe('marking items as complete / incomplete', () => {
  const myList = new TodoList("My List")
  myList.createTodo("New item")
  myList.createTodo("New item")
  myList.createTodo("New item")

  it('marking item id = 2 as complete', () => {
    expect(myList.toggleComplete(2)).toEqual(true)
  })

  it('toggling an id that does not exist returns false', () => {
    expect(myList.toggleComplete(6)).toEqual(false)
  })
})
