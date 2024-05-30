import ToDoList from "../src/todolist.js"

describe("ToDoList", () => {
    const toDoList = new ToDoList()

    it("be able to create a to do task", () => {
        toDoList.createToDo("a task to complete")
        expect(toDoList.getToDoList()).toEqual([{id: 1, task: "a task to complete", complete: false}])
    })

    it("created to do must have at least one character", () => {
        expect(toDoList.createToDo("")).toEqual("task needs at least one character")
    })

    it("value for creating a todo must be a string", () => {
        expect(toDoList.createToDo(23).toEqual("task must be a string"))
    })
})