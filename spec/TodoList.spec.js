const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("creates a second todo item with a differt description", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "open the window",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("open the window")
    // verify
    expect(result).toEqual(expected)
  })
  

  it("this todo should increment the ID", () => {
    // set up
    const todoList = new TodoList()
    const firstToDO = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const secondToDo = {
      id: 2,
      text: "second thing to do",
      status: "incomplete"
    }
    // execute
    todoList.create("first thing to do")
    const result = todoList.create("second thing to do")
    // verify
    expect(result).toEqual(secondToDo)
  })


})
