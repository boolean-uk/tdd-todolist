const todoList = []

function getAll() {
  return todoList
}

function create(description) {
  const todo = {
    id: todoList.length + 1,
    description,
    status: 'incomplete'
  }

  todoList.push(todo)

  return todo
}

function resetTodolist() {
  todoList.splice(0, todoList.length)
}

module.exports = {
  create,
  resetTodolist,
  getAll
}
