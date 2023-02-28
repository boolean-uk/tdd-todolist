// STATES
const toDos = []
let lastUsedId = 0

function createToDo(description) {
  lastUsedId += 1
  toDos.push({ id: lastUsedId, text: description, status: 'incomplete' })
  console.log('TO DO DATA: ', toDos)
  console.log('toDos LAST ID: ', toDos[lastUsedId])

  return toDos[lastUsedId - 1]
}

module.exports = { createToDo }
