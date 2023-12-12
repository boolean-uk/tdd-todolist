const {
  addTodo,
  listAllTodos,
  markComplete,
  getIncompleteTodos,
  getCompleteTodos,
  findTodoById,
  removeTodoById
} = require('../src/todolist')

describe('Todo list functionality', () => {
  it('should create a new todo with an id, description, and incomplete status', () => {
    const expectedTodo = {
      id: 1,
      description: 'Buy groceries',
      status: 'incomplete'
    }
    const description = 'Buy groceries'
    const status = 'incomplete'
    const newTodo = addTodo(1, description, status)
    expect(newTodo).toEqual(expectedTodo)
  })

  it('should list all todos in the todoList array', () => {
    const todoList = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const allTodos = listAllTodos(todoList)
    expect(allTodos).toEqual(todoList)
  })

  it('should return a message when trying to list all todos from an empty todo list', () => {
    const emptyTodoList = []
    const getTodos = listAllTodos(emptyTodoList)
    expect(getTodos).toEqual('No todos available')
  })

  it('should mark a todo as complete by id', () => {
    const todoList = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const id = 2
    const expectedResult = {
      id: 2,
      description: 'Clean the house',
      status: 'complete'
    }
    const changedStatus = markComplete(id, todoList)
    expect(changedStatus).toEqual(expectedResult)
  })

  it('should get incomplete todos', () => {
    const todoList = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const expectedResult = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' }
    ]
    const incompleteTodos = getIncompleteTodos(todoList)
    expect(incompleteTodos).toEqual(expectedResult)
  })

  it('should get complete todos', () => {
    const todoList = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const expectedResult = [
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const completeTodos = getCompleteTodos(todoList)
    expect(completeTodos).toEqual(expectedResult)
  })

  it('should find a todo by id', () => {
    const todoList = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const expectedResult = {
      id: 3,
      description: 'Finish work project',
      status: 'complete'
    }
    const foundTodo = findTodoById(3, todoList)
    expect(foundTodo).toEqual(expectedResult)
  })

  it('should remove a todo by id', () => {
    const todoList = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' },
      { id: 4, description: 'Exercise', status: 'complete' }
    ]
    const expectedResult = [
      { id: 1, description: 'Laundry', status: 'incomplete' },
      { id: 2, description: 'Clean the house', status: 'incomplete' },
      { id: 3, description: 'Finish work project', status: 'complete' }
    ]
    const removedTodo = removeTodoById(4, todoList)
    expect(removedTodo).toEqual(expectedResult)
  })
})
