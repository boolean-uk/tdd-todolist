const {
  createTodo,
  todos,
  getAllTodos,
  setComplete
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
})
