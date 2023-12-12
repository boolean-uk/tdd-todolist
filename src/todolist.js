const todoList = []

const createTodo = (text) => {
  const newToDo = {
    id: todoList.length + 1,
    text,
    status: 'incomplete'
  }
  todoList.push(newToDo)
  return newToDo
}

// console.log(createTodo('hi'))
// console.log(todoList)
// console.log(createTodo('bye'))
// console.log(todoList)

module.exports = { todoList, createTodo }
