const toDoList = [
  {
    id: 1,
    description: 'mow the grass',
    complete: false
  },
  {
    id: 2,
    description: 'do the dishes',
    complete: false
  },
  {
    id: 3,
    description: 'go to the gym',
    complete: false
  }
]

const createToDo = (input) => {
  const num = toDoList.length + 1

  const toDoItem = {
    id: num,
    description: input,
    complete: false
  }

  console.log(toDoItem)
  if (typeof input === 'string') {
    return toDoItem
  } else return false
}

createToDo()
module.exports = {
  createToDo
}
