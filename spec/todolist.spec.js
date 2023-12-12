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

const myList = new TodoList("My List")

describe('adding items', () => {
  it('adding item to list', () => {
    expect(myList.createTodo("Do homework")).toEqual(true)
  })

  it("empty description returns false", () => {
    expect(myList.createTodo('')).toEqual(false)
  })
})
