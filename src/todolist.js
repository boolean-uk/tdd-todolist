const toDoList = []
let id = 1
const create = (todo) => {
  const obj = {
    id: id++,
    text: todo,
    status: 'incomplete'
  }

  toDoList.push(obj)

  return toDoList
}

const get = () => {
  return toDoList
}

const setDone = (id) => {
  const arr = toDoList.filter((object) => {
    return object.id === id
  })

  arr[0].status = 'complete'
  toDoList.splice(toDoList.indexOf(arr[0]), 1, arr[0])

  return toDoList
}

const getIncomplete = () => {
  toDoList.filter((object) => {
    return object.status === 'incomplete'
  })
}

module.exports = { create, get, setDone, getIncomplete, toDoList }
