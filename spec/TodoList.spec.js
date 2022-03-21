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

  it("creates a different todo item", () => {
  // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the air conditioning on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the air conditioning on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("should increment the id", () => {
    // set up
    const todoList = new TodoList();
    const firstTodo = {
       id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const secondTodo = {
        id: 2,
      text: "turn the air conditioning on!",
      status: "incomplete"
    }
    // execute 
    todoList.create("turn the heating on!")
    const result = todoList.create("turn the air conditioning on!")

    // verify 
    expect(result).toEqual(secondTodo)
  })

  it("show all completed todos", () => {
    //set up
     id:  
     text: 
     status: "complete"
  }
  expect(result).toEqual(expected)
})
