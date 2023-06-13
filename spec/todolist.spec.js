import Todolist from '../src/todolist'

describe("to do list", () => {
    const todoList = new Todolist([])
    it("create todo item", function() {
        expect(todoList.createTodoItem(1, "finish the exercise")).toEqual({id: 1, text: "finish the exercise", status: "incomplete"})
    })
    it("get all todo items", function() {
        expect(todoList.getAll().toEqual({id: 1, text: "finish the exercise", status: "incomplete"}))
    })
    it("set todo complete by id", function() {
        expect(todoList.setComplete(1).toEqual({id: 1, text: "finish the exercise", status: "complete"}))
    })
})