const todos = []

const createTodo = (todoText) => {
  const todoItem = { task: todoText, complete: false, id: todos.length + 1 }

  todos.push(todoItem)

  return todoItem
}

const getAllTodos = () => {
  return todos
}

const setComplete = (id) => {
  const found = todos.find((todo) => todo.id === id)
  if (!found) return

  found.complete = true

  return getAllTodos()
}

const searchById = (id) => {
  const found = todos.find((todo) => todo.id === id)

  if (!found) return false

  return found
}

// createTodo('Watch world cup')
// console.log(todos)
// setComplete(1)
// console.log(todos)

module.exports = { createTodo, todos, getAllTodos, setComplete, searchById }
