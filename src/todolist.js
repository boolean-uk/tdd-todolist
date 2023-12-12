const todos = []

function addTodo(id, description, status) {
  const todo = {
    id: id,
    description: description,
    status: status
  }
  todos.push(todo)
  return todo
}

function listAllTodos() {
  return todos.length === 0 ? 'No todos available' : todos
}

function markComplete(id) {
  const todo = todos.find((item) => item.id === id)
  if (todo) {
    todo.status = 'complete'
  }
  return todo
}

function getIncompleteTodos() {
  return todos.filter((item) => item.status === 'incomplete')
}

function getCompleteTodos() {
  return todos.filter((item) => item.status === 'complete')
}

function findTodoById(id) {
  return todos.find((item) => item.id === id)
}

function removeTodoById(id) {
  const updatedTodos = todos.filter((item) => item.id !== id)
  return updatedTodos
}

module.exports = {
  addTodo,
  listAllTodos,
  markComplete,
  getIncompleteTodos,
  getCompleteTodos,
  findTodoById,
  removeTodoById
}
