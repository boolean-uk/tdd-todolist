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

    it("return all completed todos in an array", () => {
        toDoList.todos = [{id: 1, task: "a", complete: true}, {id: 2, task: "b", complete: false}, {id: 3, task: "c", complete: true}]
        expect(toDoList.complete()).toEqual([{id: 1, task: "a", complete: true}, {id: 3, task: "c", complete: true}])
    })

    it("if no completed todos return message", () => {
        expect(toDoList.complete()).toEqual("No tasks completed")
    })

    it("return all incompleted todos in an array", () => {
        toDoList.todos = [{id: 1, task: "a", complete: true}, {id: 2, task: "b", complete: false}, {id: 3, task: "c", complete: false}]
        expect(toDoList.incomplete()).toEqual([{id: 2, task: "b", complete: false}, {id: 3, task: "c", complete: false}])
    })

    it("if no incompleted todos return message", () => {
        expect(toDoList.incomplete()).toEqual("All tasks complete")
    })

    it("searching for an existing todo by id", () => {
        toDoList.createToDo("a task to complete")
        expect(toDoList.search(1).toEqual({id: 1, task: "a task to complete", complete: true}))
    })

    it("searching for a todo by id which doesn't exist", () => {
        expect(toDoList.search(1).toEqual("Task id doesn't exist"))
    })

    it("remove a task by id", () => {
        toDoList.createToDo("a task to complete")
        toDoList.remove(1)
        expect(toDoList.getToDoList()).toEqual([])
    })

    it("trying to remove a task by invalid id", () => {
        expect(toDoList.remove().toEqual("No task with this id"))
    })

})