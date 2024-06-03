const TodoItem = require('../src/todoitem')
const TodoList = require('../src/todolist')
describe('TodoItem', () => {
  it('Should initialize ID and status properties', () => {
    const todoItem = new TodoItem('A task')

    expect(todoItem?.ID).toBeDefined()
    expect(todoItem?.status).toBeFalsy()
  })
})

describe('list functionalities', () => {
  let list
  beforeEach(() => {
    list = new TodoList()
  })

  const itemA = new TodoItem('Buy groceries')
  const itemB = new TodoItem('feed animals')
  const itemC = new TodoItem('water plants')

  describe('create', () => {
    beforeEach(() => {
      list = new TodoList()
    })
    it('Should add a new item with valid data', () => {
      list.add(itemA)
      expect(list.length).toBe(1)
    })

    it('Should not add an item with invalid data', () => {
      list.add('A todo task')
      expect(list.length).toBe(0)
    })
  })

  describe('read', () => {
    it('Should return the element that matches the pattern', () => {
      list.add(itemA)
      list.add(itemB)
      list.add(itemC)

      expect(list.search({ id: itemA.ID })).toEqual([itemA])
      expect(list.search({ text: 'Buy' })).toEqual([itemA])
      expect(list.search({ status: false })).toEqual([itemA, itemB, itemC])
      expect(list.search({ id: itemC.ID, text: 'feed' })).toEqual([
        itemB,
        itemC
      ])
      expect(list.search({ status: true })).toEqual([])
    })
  })

  describe('update', () => {
    it('Should update an items text and/or status', () => {
      list.add(itemA)
      list.update(itemA.ID, { status: true })

      expect(list.search({ status: true })[0].text).toEqual(itemA.text)

      list.update(itemA.ID, { text: 'Buy oil filter' })

      expect(list.search({ text: 'oil filter' })[0].status).toEqual(true)
    })
  })

  describe('delete', () => {
    it('Should delete an item based on its id', () => {
      list.add(itemA)
      expect(list.length).toBe(1)
      list.remove(itemA.ID)
      expect(list.length).toBe(0)
    })
  })
})
