const {
  createToDo,
  getAllToDos,
  clearToDos,
  toggleToDo,
  getIncompleteToDos,
  getCompleteToDos,
  searchToDoById
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

  it('Returns only incomplete todos', () => {
    createToDo('Feed the cat')
    createToDo('Feed the dog')
    createToDo('Feed the wolf')
    createToDo('Feed the whale')

    toggleToDo(1)
    toggleToDo(3)

    const expectedToDos = [
      { id: 2, text: 'Feed the dog', status: 'incomplete' },
      { id: 4, text: 'Feed the whale', status: 'incomplete' }
    ]

    // const result = getIncompleteToDos()
    // console.log('RESULT: ', result)

    expect(getIncompleteToDos()).toEqual(expectedToDos)
  })

  it('Returns only complete todos', () => {
    createToDo('Feed the cat')
    createToDo('Feed the dog')
    createToDo('Feed the wolf')
    createToDo('Feed the whale')

    toggleToDo(1)
    toggleToDo(3)

    const expectedToDos = [
      { id: 1, text: 'Feed the cat', status: 'complete' },
      { id: 3, text: 'Feed the wolf', status: 'complete' }
    ]

    expect(getCompleteToDos()).toEqual(expectedToDos)
  })

  it('Returns a todo by ID', () => {
    createToDo('Feed the cat')
    createToDo('Feed the dog')
    createToDo('Feed the wolf')
    createToDo('Feed the whale')

    expect(searchToDoById(4)).toEqual({
      id: 4,
      text: 'Feed the whale',
      status: 'incomplete'
    })
    expect(searchToDoById(1)).toEqual({
      id: 1,
      text: 'Feed the cat',
      status: 'incomplete'
    })
  })

  // it('Removes a todo item by ID', () => {})
})
