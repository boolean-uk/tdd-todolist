const { createToDo } = require('../src/todolist')

describe('createToDo', () => {
  it('should create a ToDo item that has the properties of ID = array.index, Text = "", completed = false', () => {
    const result = createToDo('ToDo created')

    expect(result).toBe('ToDo created')
  })
})

// const { addedItem } = require('./index.js')

// describe('addingItem', () => {
//   it('Should show me that an item has been added to the basket', () => {
//     const result = addedItem('item added to basket')

//     expect(result).toEqual('item added to basket')
//     // write code one line at a time, testing after each line.
//     // As soon as the test fails, start writing source code
//   })

//   it('Should tell if i have the item in my basket already', () => {
//     const result = addedItem('item in cart already')

//     expect(result).toBe('item in cart already')
//   })
// })
