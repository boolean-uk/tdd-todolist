import TodoList from '../src/todolist.js'

describe('TodoList', () => {
  describe('addItem', () => {
    it('should add a new todo item to the list with the provided description as well as a unique id', () => {
      // SET UP
      //   getting everything in place before you run the function that you are testing
      const todoList = new TodoList()
      const expected = [
        {
          id: 1,
          description: 'go shopping',
          isComplete: false
        }
      ]
      // EXECUTE
      const result = todoList.addItem('go shopping')

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('getAll', () => {
    it('should get all todo items from the list', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      todoList.addItem('buy milk')
      const expected = [
        {
          id: 1,
          description: 'go shopping',
          isComplete: false
        },
        {
          id: 2,
          description: 'buy milk',
          isComplete: false
        }
      ]
      // EXECUTE
      const result = todoList.getAll()

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('setComplete', () => {
    it('set todo completed by id', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      const expected = {
        id: 1,
        description: 'go shopping',
        isComplete: true
      }

      // EXECUTE
      const result = todoList.setComplete(1)

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('getIncomplete', () => {
    it('get to do items that are incomplete', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      const expected = [
        {
          id: 1,
          description: 'go shopping',
          isComplete: false
        }
      ]
      // EXECUTE
      const result = todoList.getIncomplete()

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('getComplete', () => {
    it('get to do items that are complete', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      todoList.setComplete(1)
      const expected = [
        {
          id: 1,
          description: 'go shopping',
          isComplete: true
        }
      ]
      // EXECUTE
      const result = todoList.getComplete()

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('searchByid', () => {
    it('search for an item by its id', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      todoList.addItem('buy milk')
      const expected = {
        id: 2,
        description: 'buy milk',
        isComplete: false
      }

      // EXECUTE
      const result = todoList.searchByid(2)

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('searchByid, unhappy path', () => {
    it('search for an item by its id', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      todoList.addItem('buy milk')
      const expected = 'item does not exist'

      // EXECUTE
      const result = todoList.searchByid(6)

      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('removeByid', () => {
    it('remove item by its id', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      todoList.addItem('buy milk')
      const expected = [
        {
          id: 2,
          description: 'buy milk',
          isComplete: false
        }
      ]
      //   EXECUTE
      const result = todoList.removeByid(1)
      // VERIFY
      expect(result).toEqual(expected)
    })
  })

  describe('removeByid, unhappy path', () => {
    it('remove item by its id', () => {
      // SET UP
      const todoList = new TodoList()
      todoList.addItem('go shopping')
      todoList.addItem('buy milk')
      const expected = 'no match found'
      //   EXECUTE
      const result = todoList.removeByid(4)
      // VERIFY
      expect(result).toEqual(expected)
    })
  })

})
