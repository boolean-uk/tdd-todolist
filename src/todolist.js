const todos = []
let counter = 0

function createTodo(string) {
  if (!string) return false
  const id = counter++
  const todo = {
    id,
    description: string,
    completed: false
  }
  return todo
}

function getTodos() {
  if (!todos || !todos.length) return 'No todo items'
  const todosList = todos.map((item) => {
    return item.description
  })
  return todosList
}

console.log(getTodos())

module.exports = {
  createTodo,
  getTodos
}
