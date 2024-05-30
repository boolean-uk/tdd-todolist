import ToDoList from "../src/todolist.js"

describe("ToDoList", () => {
    let toDoList 

    beforeEach(() => {
        toDoList = new ToDoList()
    })

    it("be able to create a to do task", () => {
        toDoList.createToDo("a task to complete")
        expect(toDoList.getToDoList()).toEqual([{id: 1, task: "a task to complete", complete: false}])
    })

    it("created to do must have at least one character", () => {    
        expect(toDoList.createToDo("")).toEqual("task needs at least one character")
    })

    it("value for creating a todo must be a string", () => {
        expect(toDoList.createToDo(23)).toEqual("task must be a string")
    })

    it("able to get a list of todos", () => {
        expect(toDoList.getToDoList()).toEqual([])
    })

    it("set an id to complete if it exists", () => {
        toDoList.createToDo("a task to complete")
        toDoList.setComplete(1)
        expect(toDoList.getToDoList()).toEqual([{id: 1, task: "a task to complete", complete: true}])
    })

    it("setting a task id to complete if it doesn't exist should give a notification", () => {
        expect(toDoList.setComplete(100)).toEqual("to do id doesn't exist")
    })

})