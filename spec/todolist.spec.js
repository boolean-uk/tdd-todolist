// import ToDoList from '../src/todolist.js'

describe("ToDo", () => {
    it("be able to create a to do task", () => {
        const toDoList = new ToDoList()

        toDoList.createToDo("a task to complete")

        expect(todoList.getToDoList().toBe([{id: 1, task: "a task to complete", complete: false}]))
    })
})