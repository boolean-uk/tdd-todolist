import TodoList, { Todo } from "../src/todolist.js"

describe("To doList", () => {
    let todolist
    beforeEach(() => {
        todolist = new TodoList()

    })

it("should exist", () => {
    expect(todolist).toBeInstanceOf(TodoList)
   })

   it("should create a new todo", () => {
       const result = todolist.create('complete exercise')

  })
})
