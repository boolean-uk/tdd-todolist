const todoList = []

const createTodo = (text) => {
  if (typeof text !== 'string') {
    return 'text value must be a valid string'
  } else {
    const newToDo = {
      id: todoList.length + 1,
      text,
      status: 'incomplete'
    }
    todoList.push(newToDo)
    return newToDo
  }
}

// console.log(createTodo('hi'))
// console.log(todoList)
// console.log(createTodo('bye'))
// console.log(todoList)

module.exports = { todoList, createTodo }
