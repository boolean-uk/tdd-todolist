function createToDo(newTodo) {
  if (!newTodo.text || newTodo.text.length < 1) {
    return 'failed to create todo'
  }
  const todo = newTodo
  return todo.text
}
function getToDos(todoList) {
  if (!todoList || todoList.length < 1) {
    return 'no todos added yet'
  }
  return todoList
}
function setCompletionStatusToTrue(id, todo) {
  if (id !== todo.id) {
    return 'incorrect id'
  }
  const updatedTodo = { ...todo, complete: true }
  return updatedTodo
}

function getIncompleteToDos(todoList) {
  const listOfIncompleteToDos = todoList.filter(
    (item) => item.complete === false
  )
  if (listOfIncompleteToDos.length < 1) {
    return 'all done!'
  }
  return listOfIncompleteToDos
}

function getCompleteToDos(todoList) {
  const listOfCOmpleteToDos = todoList.filter((item) => item.complete === true)
  if (listOfCOmpleteToDos.length < 1) {
    return 'no todo completed yet!'
  }
  return listOfCOmpleteToDos
}
function findToDoById(id, todoList) {
  return todoList.find((item) => item.id === id)
}
function removeToDo(id, todoList) {}

module.exports = {
  createToDo,
  getToDos,
  setCompletionStatusToTrue,
  getIncompleteToDos,
  getCompleteToDos,
  findToDoById,
  removeToDo
}
