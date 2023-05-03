// STATES
let toDos = []
let lastUsedId = 0

function createToDo(description) {
  lastUsedId += 1
  toDos.push({ id: lastUsedId, text: description, status: 'incomplete' })
  // console.log('TO DO DATA: ', toDos)
  // console.log('toDos LAST ID: ', toDos[lastUsedId])

  return toDos[lastUsedId - 1]
}

function getAllToDos() {
  return toDos
}

function clearToDos() {
  toDos = []
  lastUsedId = 0
}

function toggleToDo(id) {
  // find() returns a reference to the original value
  // this is why I can use foundToDo.status to update the original value
  // In this case, find() is more simple than using findIndex()

  const foundToDo = toDos.find((toDo) => toDo.id === id)

  if (foundToDo.status === 'incomplete') {
    foundToDo.status = 'complete'
  }
  return foundToDo
}

function getIncompleteToDos() {
  return toDos.filter((toDo) => toDo.status === 'incomplete')
}

function getCompleteToDos() {
  return toDos.filter((toDo) => toDo.status === 'complete')
}

// function findToDo(id) {
//   return toDos.findIndex((toDo) => toDo.id === id)
// }

module.exports = {
  createToDo,
  getAllToDos,
  clearToDos,
  toggleToDo,
  getIncompleteToDos,
  getCompleteToDos
}
