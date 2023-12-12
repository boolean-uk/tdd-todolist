const { Todos } = require('../src/todolist.js')

describe('Todos', () => {
  let todo

  beforeEach(() => {
    todo = new Todos()
  })

  describe('Create new Todo', () => {
    it('returns new todo item as an object', () => {
      const text = 'new todo'
      const newToDo = todo.createTodo(text)
      expect(newToDo).toEqual({ id: 1, text: 'new todo', completed: false })
    })

    it('user can only enter a string as the todo text description', () => {
      const text = 1
      const newToDo = todo.createTodo(text)
      expect(newToDo).toEqual('text value must be a valid string')
    })
  })

  describe('Get All Todos', () => {
    it('returns full list of todo items', () => {
      const newToDo1 = todo.createTodo('Do the laundry')
      const newToDo2 = todo.createTodo('Make the bed')
      const todoList = [newToDo1, newToDo2]
      expect(todoList).toEqual(todo.getAllTodos())
    })

    it('returns empty array when there are no todo items in list', () => {
      expect(todo.getAllTodos()).toEqual([])
    })
  })
})
