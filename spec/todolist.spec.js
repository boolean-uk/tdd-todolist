const TodoList = require('../src/todoList.js')

describe('todoList', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('creates a todo item', () => {
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete'
    }
    const result = todoList.create('turn the heating on!')
    expect(result).toEqual(expected)
  })

  it('returns all tasks', () => {
    const item1 = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete'
    }
    const item2 = {
      id: 2,
      text: 'Do the washing up',
      status: 'incomplete'
    }
    const expected = [item1, item2]
    todoList.create('turn the heating on!')
    todoList.create('Do the washing up')
    expect(todoList.getAllTodos()).toEqual(expected)
  })

  it('sets item to be complete if found', () => {
    const item1 = todoList.create('turn the heating on!')
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'complete'
    }
    const result = todoList.setToComplete(item1.id)
    expect(result).toEqual(expected)
  })

  it('throws error if not found', () => {
    expect(() => todoList.setToComplete(1)).toThrowError('Item not found')
  })

  it('gets incomplete items', () => {
    const item1 = todoList.create('turn the heating on!')
    const item2 = todoList.create('Do the washing up')
    todoList.setToComplete(item1.id)
    const expected = [item2]
    const result = todoList.getByStatus('incomplete')
    expect(result).toEqual(expected)
  })

  it('gets complete items', () => {
    const item1 = todoList.create('turn the heating on!')
    const item2 = todoList.create('Do the washing up')
    todoList.setToComplete(item1.id)
    const expected = [item1]
    const result = todoList.getByStatus('complete')
    expect(result).toEqual(expected)
  })

  it('finds item by id', () => {
    const item1 = todoList.create('turn the heating on!')
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete'
    }

    const result = todoList.findTodo(item1.id)

    expect(result).toEqual(expected)
  })

  it('findTodo throws error if not found', () => {
    expect(() => todoList.findTodo(1)).toThrowError('Item not found')
  })

  it('deletes item by id', () => {
    const item1 = todoList.create('turn the heating on!')
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete'
    }
    const deletedItem = todoList.deleteTodoItem(1)
    expect(deletedItem).toEqual(expected)
    expect(todoList.getAllTodos()).toEqual([])
  })

  it('delete throws error if not found', () => {
    expect(() => todoList.deleteTodoItem(1)).toThrowError('Item not found')
  })
})
