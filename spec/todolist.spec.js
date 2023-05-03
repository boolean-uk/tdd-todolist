const {
  createToDo,
  getAllToDos,
  clearToDos,
  toggleToDo
} = require('./../src/todolist.js')

describe('To dos', () => {
  beforeEach(() => {
    clearToDos()
  })

  it('Creates a To-Do item', () => {
    const description = 'Feed the cat'
    const result = createToDo(description)
    const expectedResult = { id: 1, text: 'Feed the cat', status: 'incomplete' }

    expect(result).toEqual(expectedResult)
  })

  it('gets all To-Do items', () => {
    createToDo('Feed the cat')
    createToDo('Feed the dog')

    const expectedToDos = [
      { id: 1, text: 'Feed the cat', status: 'incomplete' },
      { id: 2, text: 'Feed the dog', status: 'incomplete' }
    ]

    const result = getAllToDos()
    expect(result).toEqual(expectedToDos)
  })

  it('Sets To-Do to status complete', () => {
    createToDo('Feed the cat')
    createToDo('Feed the dog')

    const result = toggleToDo(2)

    const expectedToDos = [
      { id: 1, text: 'Feed the cat', status: 'incomplete' },
      { id: 2, text: 'Feed the dog', status: 'complete' }
    ]
    expect(getAllToDos()).toEqual(expectedToDos)
    expect(result).toEqual(expectedToDos[1])
  })

  // it('Returns only incomplete todos', () => {
  //   createToDo('Feed the cat')
  //   createToDo('Feed the dog')
  //   createToDo('Feed the wolf')
  //   createToDo('Feed the whale')

  //   toggleToDo(0)
  //   toggleToDo()
  // })

  // it('Returns only complete todos', () => {})

  // it('Returns a todo by ID', () => {})

  // it('Removes a todo item by ID', () => {})
})
