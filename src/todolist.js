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

// const setToDoComplete = (id, toDoList) => {


// }
module.exports = {
  createToDo,
  getToDo
}
