// const { create, get, setDone, getIncomplete } = require('../src/todolist.js')

// create('This is a note')
// create('This is a second note')
// create('This is a third note')
// create('This is a fourth note')
// create('This is a fifth note')

describe('todoListFunctions', () => {
  beforeEach(() => {
    const cache = require.cache
    for (const moduleId in cache) {
      delete cache[moduleId]
    }
  })

  describe('create', () => {
    it('add a new todo to the todo object with a unique id and incomplete status', () => {
      const { create } = require('../src/todolist.js')
      // Given
      const todo =
        'This is some text that represents a note that has been added'

      // When
      const result = create(todo)

      // Then

      expect(result).toEqual({ id: 1, text: todo, status: 'incomplete' })
    })
  })

  describe('get', () => {
    it('Is going to return the array with objects (the todos)', () => {
      const { get, create } = require('../src/todolist.js')

      // When
      create('This is a note')
      const result = get()

      // Then

      expect(result).toEqual([
        {
          id: 1,
          text: 'This is a note',
          status: 'incomplete'
        }
      ])
    })
  })

  describe('setDone', () => {
    it('Will identify the todo by id and change the status to complete', () => {
      const { setDone, create } = require('../src/todolist.js')

      // Given
      const id = 1

      // When
      create('This is a note')
      const result = setDone(id)

      // Then
      expect(result).toEqual({
        id: 1,
        text: 'This is a note',
        status: 'complete'
      })
    })
  })

  describe('getIncomplete', () => {
    it('Will return the array of objects that have an incomplete status only', () => {
      const { getIncomplete, create, setDone } = require('../src/todolist.js')

      // When
      create('This is some text that represents a note that has been added')
      create('This is a third note that has been added')
      setDone(1)

      const result = getIncomplete()

      // Then
      expect(result).toEqual([
        {
          id: 2,
          text: 'This is a third note that has been added',
          status: 'incomplete'
        }
      ])
    })
  })
})
