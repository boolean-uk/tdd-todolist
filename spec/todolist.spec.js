const { createTodo, getTodos } = require('../src/todolist.js')

describe(' Todo Functions:', () => {
  describe('Create Todo:', () => {
    it('if there is a valid string', () => {
      // GIVEN
      const str = 'Do laundry'
      // WHEN
      let counter = 0
      const id = counter++
      const item1 = {
        id,
        description: 'Do laundry',
        completed: false
      }

      const result = createTodo(str)
      // THEN
      expect(result).toEqual(item1)
    })

    it('if there is not a valid string', () => {
      // GIVEN
      const str = ''
      // WHEN
      const result = createTodo(str)
      // THEN
      expect(result).toEqual(false)
    })
  })

  describe('Get Todos', () => {
    it('if todos exist in state', () => {
      // GIVEN
      const todos = [
        {
          id: 1,
          description: 'Do laundry',
          completed: false
        }
      ]
      // WHEN
      const result = getTodos(todos)
      //   THEN
      expect(result).toEqual(['Do laundry'])
    })
    it('if todos dont exist in state', () => {
      // GIVEN
      const todos = []
      // WHEN
      const result = getTodos(todos)
      // THEN
      expect(result).toEqual('No todo items')
    })
  })
})
