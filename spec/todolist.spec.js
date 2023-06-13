import createTask from "../src/todolist.js"
import data from "../src/data.js"

describe ("Create Todo", () => {

    it("Return item with ID, name and provided description", () => {

        // setup
        const taskName = "write tests"
        const taskId = 1
        const taskDescription = "Stores List of tests"
        const taskComplete = false

        // execute
        createTask(taskName, taskId, taskDescription, taskComplete)

        // verify
        expect(data[0]).toEqual({taskName: "write tests", taskId: 1, taskDescription: "Stores List of tests", taskComplete: false})

    })
})

describe ()
