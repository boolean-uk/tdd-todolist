function createToDo(newTodo) {
  if (!newTodo.text || newTodo.text.length < 1) {
    return 'failed to create todo'
  }
  const todo = newTodo
  return todo.text
}
function getToDos(todoList) {
  return todoList
}
function getIncompleteToDos() {}
function getCompletedTodos() {}
function findToDoByID(id) {}
function removeToDo(id) {}

module.exports = {
  createToDo,
  getToDos,
  getIncompleteToDos,
  getCompletedTodos,
  findToDoByID,
  removeToDo
}
