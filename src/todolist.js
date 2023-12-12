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
  const listOfIncompleteTodos = todoList.filter(
    (item) => item.complete === false
  )
  if (listOfIncompleteTodos.length < 1) {
    return 'all done!'
  }
  return listOfIncompleteTodos
}

function getCompletedTodos(todoList) {
}
function findToDoByID(id, todoList) {}
function removeToDo(id, todoList) {}

module.exports = {
  createToDo,
  getToDos,
  setCompletionStatusToTrue,
  getIncompleteToDos,
  getCompletedTodos,
  findToDoByID,
  removeToDo
}
