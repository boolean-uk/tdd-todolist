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

  it("gets all todos", () => {
    // set up
    const todoList = new TodoList()
    const expected = [ 
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete"
      },
      {
        id: 2,
        text: "buy milk",
        status: "incomplete"
      }
    ] 
    // execute
    todoList.create("turn the heating on!")
    todoList.create("buy milk")
    const result = todoList.getAllTodos()
    // verify
    expect(result).toEqual(expected)
  })

  it("set todo complete, by id", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 2,
      text: "buy milk",
      status: "complete"
    }
    // execute
    todoList.create("turn the heating on!")
    todoList.create("buy milk")
    const result = todoList.setTodoComplete(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("get todos that are incomplete", () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete"
      }
    ]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("buy milk")
    todoList.setTodoComplete(2)
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("get todos that are complete", () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
        id: 2,
        text: "buy milk",
        status: "complete"
      }
    ]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("buy milk")
    todoList.setTodoComplete(2)
    const result = todoList.getComplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("get todo by id", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 2,
      text: "buy milk",
      status: "incomplete"
    }
    // execute
    todoList.create("turn the heating on!")
    todoList.create("buy milk")
    const result = todoList.getTodo(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("remove todo by id", () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
        id: 2,
        text: "buy milk",
        status: "incomplete"
      }
    ]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("buy milk")
    const result = todoList.removeTodo(1)
    // verify
    expect(result).toEqual(expected)
  })
})
