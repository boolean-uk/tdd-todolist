const todos = []

const createTodo = (todoText) => {
  const todoItem = { task: todoText, complete: false, id: todos.length + 1 }

  todos.push(todoItem)
}

const getAllTodos = () => {
  return todos
}

const setComplete = (id) => {
  const found = todos.find((todo) => todo.id === id)
  if (!found) return

  found.complete = true
}

// createTodo('Watch world cup')
// setComplete(1)

module.exports = { createTodo, todos, getAllTodos, setComplete }
