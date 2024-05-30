import ToDoList from "../src/todolist.js"

describe("ToDoList", () => {
    const toDoList = new ToDoList()

    it("be able to create a to do task", () => {
        toDoList.createToDo("a task to complete")
        expect(toDoList.getToDoList()).toEqual([{id: 1, task: "a task to complete", complete: false}])
    })
})