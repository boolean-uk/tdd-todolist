// import file.js

// write tests

describe('Add a new todo to List', () => {
  it('returns a new todo item', () => {
    const newItem = { description: 'laundry', id: 1, status: 'incomplete' }
    const todoList = []
  })
  const todoList = createNewTodo(newItem)
  expect(todoList).toEqual([
    { description: 'laundry', id: 1, status: 'incomplete' }
  ])
})
