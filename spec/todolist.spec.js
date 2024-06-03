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

       expect(result).toBeInstanceOf(Todo)
       expect(result.id).toBe(1)
       expect(result.text).toBe('complete exercise')
       expect(result.status).toBe('incomplete')

  })
})
