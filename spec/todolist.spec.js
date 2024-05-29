const { Item } = require('../src/todolist.js')

describe('item', () => {
  it('should have an id, description and be incomplete', () => {
    const item = new Item('something')
    expect(item.description).toBe('something')
  })
})
