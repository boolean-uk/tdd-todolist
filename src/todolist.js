const todos = []

function createTodo(string) {
  if (!string) return false
  const todo = {
    id: 1,
    description: string,
    completed: false
  }
  return todo
}

createTodo('Do laundry')
console.log(todos)

module.exports = {
  createTodo
}
