import data from './data.js'

//FUNCTIONS

const createTask = (taskName, taskId, taskDescription, taskComplete) => {
  data.push({
    taskName: taskName,
    taskId: taskId,
    taskDescription: taskDescription,
    taskComplete: false
  })
}

const getAll = (data) => {
  console.log('getAll', data)
}

const completeById = (givenTaskId) => {
  data.find((item) => {
    if (item.taskId === givenTaskId) {
      item.taskComplete = true
      console.log('completeById', item)
    }
  })
}

//CALL

createTask('write tests', 1, 'Stores List of tests', false)
createTask('write tests', 2, 'Stores List of tests', false)

getAll(data)
completeById(1)

export { createTask, getAll, completeById }
