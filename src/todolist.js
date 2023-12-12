const createTodo = (description) => {
  if (!description) return false
  return { description, complete: false }
}

module.exports = { createTodo }
