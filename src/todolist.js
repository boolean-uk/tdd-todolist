import data from "./data.js"

const createTask = (taskName, taskId, taskDescription, taskComplete) => {

    data.push({taskName: taskName, taskId: taskId, taskDescription: taskDescription, taskComplete: false})

}

createTask("write tests", 1, "Stores List of tests", false)

console.log(data)

export default createTask