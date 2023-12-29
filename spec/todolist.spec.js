import Todolist from '../src/todolist'

describe('TDD todoList', () => {
  const todos = [
    {
      id: 1,
      text: 'I will be going to the gym',
      status: 'incomplete'
    },
    {
      id: 2,
      text: 'I am going for a date',
      status: 'incomplete'
    }
  ]
  const todoListInstance = new Todolist(todos)

  it('creates a todo item with an ID, text description, and incomplete status', () => {
    const newTodoText = 'I am traveling'
    const result = todoListInstance.create(newTodoText)

    const newId = todoListInstance.todolist.length + 1

    expect(result).toEqual({
      id: newId,
      text: newTodoText,
      status: 'incomplete'
    })
  })

  it('Get all todo items', () => {
    const result = todoListInstance.getAllTodo(todos)
    expect(result).toBeTrue()
  })

  it('set a todo completed by its ID', () => {
    const result = todoListInstance.setComplete(todos)
    expect(result).toBe({
      id: 2,
      text: 'I am going for a date',
      status: 'complete'
    })
  })

  it('get todo items that are incomplete', () => {
    const allIncompleteTodo = todos.filter(
      (todo) => todo.status === 'incomplete'
    )
    const result = todoListInstance.getIncompleteTodos()

    expect(result).toEqual(allIncompleteTodo)
  })

  it('get todo items that are complete', () => {
    const allCompleteTodo = todos.filter((todo) => todo.status === 'complete')
    const result = todoListInstance.getCompleteTodos()

    expect(result).toEqual(allCompleteTodo)
  })

  it('Search and return a todo item by its ID, or return a message saying it doesn’t exist', () => {
    const todoId = 2
    const searchTodowithId = todos.find((todo) => todo.id === todoId)
    const searchResult = searchTodowithId || 'doesnt exist'
    const result = todoListInstance.searchTodoById(searchResult)
    expect(result).toEqual(searchResult)
  })

  it('Remove a todo item by its ID', () => {
    const idTobeRemoved = 2

    const removeTodowithId = todos.filter((todo) => todo.id !== idTobeRemoved)

    const result = todoListInstance.removeById()

    expect(result).toEqual(removeTodowithId)
  })
})
