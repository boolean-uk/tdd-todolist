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
  if (toDos[id].status === 'incomplete') {
    toDos[id].status = 'complete'
  }
  return toDos[id]
}

module.exports = { createToDo, getAllToDos, clearToDos, toggleToDo }
