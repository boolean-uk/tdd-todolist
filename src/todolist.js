const todos = []
let counter = 1

function createTodo(string) {
  if (!string) return false
  const id = counter++
  const todo = {
    id: id,
    description: string,
    completed: false
  }
  return todo
}

todos.push(createTodo('Do laundry'))
console.log(todos)
todos.push(createTodo('pet the cat'))
console.log(todos)

module.exports = {
  createTodo
}
