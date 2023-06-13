import { createTask } from '../src/todolist.js'
import data from '../src/data.js'
import { getAll } from '../src/todolist.js'

describe('Create Todo', () => {
  it('Return item with ID, name, provided description and complete set to false', () => {
    // setup
    const taskName = 'write tests'
    const taskId = 1
    const taskDescription = 'Stores List of tests'
    const taskComplete = false

    // execute
    createTask(taskName, taskId, taskDescription, taskComplete)

    // verify
    expect(data[0]).toEqual({
      taskName: 'write tests',
      taskId: 1,
      taskDescription: 'Stores List of tests',
      taskComplete: false
    })
  })
})

describe('Get all', () => {
  it('Return all of the task objects in the data array'),
    () => {
      //setup

      //execute
      const res = getAll(data)

      //verify
      expect(res).toEqual(data)
    }
})

describe('complete by ID', () => {
  it('return the item with the complete set to true'),
    () => {
      //setup
      const taskId = 1

      //execute
      const res = completeById(taskId)

      //verify
      expect(res).toEqual({
        taskName: 'write tests',
        taskId: 1,
        taskDescription: 'Stores List of tests',
        taskComplete: true
      })
    }
})
