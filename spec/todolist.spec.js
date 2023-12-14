const { ToDoList, ToDoItem, increaseId } = require('../src/todolist.js')

describe(' Todo Functions:', () => {
  describe('To Do Item', () => {
    it('/ creates a new item, starts off as complete', () => {
      increaseId(1)
      const newItem = new ToDoItem('Do the laundry')
      expect(newItem.description).toEqual('Do the laundry')
    })
    it('/ if param is left empty ', () => {
      increaseId(1)
      const newItem = new ToDoItem('')
      expect(newItem).toEqual('Please enter a todo!')
    })
  })

  describe('To Do List', () => {
    const toDoList = new ToDoList()
    it('/ can have item added', () => {
      increaseId(1)
      toDoList.list = []
      const item1 = new ToDoItem('Do laundry')
      const item2 = new ToDoItem('Pet the cat')

      toDoList.addItem(item1)
      toDoList.addItem(item2)

      expect(toDoList.list.length).toEqual(2)
      expect(toDoList.list[0].id).toEqual(1)
      expect(toDoList.list[1].id).toEqual(2)
    })
  })
})
