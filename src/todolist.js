const createToDo = (input, toDoList) => {
  const num = toDoList.length + 1

  const toDoItem = {
    id: num,
    description: input,
    complete: false
  }

  if (typeof input === 'string') {
    return toDoItem
  } else return false
}

const getToDo = (toDoList) => {
  if (toDoList.length > 0) return toDoList
  return false
}

const setToDoComplete = (id, toDoList) => {
  const itemToEdit = toDoList.find((item) => item.id === id)
  if (typeof itemToEdit === 'object') {
    itemToEdit.complete = true
    return true
  }

  return false
}

module.exports = {
  createToDo,
  getToDo,
  setToDoComplete
}
