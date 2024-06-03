import TodoList from "../src/todolist.js"

describe("To doList", () => {
it("should exist", () => {
    const tdl = new TodoList()
    expect(tdl).toBeInstanceOf(TodoList)
   })
})
