const {
  createTodo,
  todos,
  getAllTodos,
  setComplete,
  searchById
} = require('../src/todolist')

describe('todos', () => {
  beforeEach(() => {
    todos.splice(0, todos.length)
  })

  it('createToDo should add an object to todos', () => {
    createTodo('Watch world cup')

    expect(todos).toEqual([{ task: 'Watch world cup', complete: false, id: 1 }])
  })

  it('getAllTodos should return todos list', () => {
    const allTodos = getAllTodos()

    expect(allTodos).toEqual(todos)
  })

  it('setComplete edits a todo item to change complete from false to true', () => {
    createTodo('Work on React project')
    setComplete(1)

    expect(todos[0]).toEqual({
      task: 'Work on React project',
      id: 1,
      complete: true
    })
  })

  it('setComplete returns updated todos', () => {
    createTodo('Work on React project')
    const updatedTodos = setComplete(1)

    expect(updatedTodos).toEqual(todos)
  })

  it('searchById returns matching todo item', () => {
    createTodo('Work on React project')
    const expected = createTodo('Watch world cup')
    const match = searchById(2)

    expect(match).toEqual(expected)
  })

  it('searchById returns false if no match', () => {
    const match = searchById(1)

    expect(match).toBeFalse()
  })
})
