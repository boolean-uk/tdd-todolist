import TodoList from '../src/todolist.js'

describe('Create Todo', () => {
  it('should add a new todo item to the list with the provided description as well as a unique id', () => {
    // SET UP
    const todoList = new TodoList()
    const expected = {
      id: 1,
      description: 'go shopping',
      isComplete: false
    }

    // EXECUTE
    const result = todoList.addItem('go shopping')

    // VERIFY
    expect(result).toEqual(expected)
  })
})
