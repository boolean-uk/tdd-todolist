const { ToDoList, ToDoItem, increaseId } = require('../src/todolist.js')

describe(' Todo Functions:', () => {
  describe('To Do Item', () => {
    increaseId(1)
    it('/ creates a new item, starts off as complete', () => {
      const newItem = new ToDoItem('Do the laundry')
      expect(newItem.description).toEqual('Do the laundry')
    })
    it('/ if param is left empty ', () => {
      const newItem = new ToDoItem('')
      expect(newItem).toEqual('Please enter a todo!')
    })
  })

  describe('To Do List', () => {
    increaseId(1)
    const toDoList = new ToDoList()
    it('/ can have item added', () => {
      toDoList.list = []
      const item1 = new ToDoItem('Do laundry')
      const item2 = new ToDoItem('Pet the cat')

      toDoList.addItem(item1)
      toDoList.addItem(item2)
      console.log(toDoList)

      expect(toDoList.list.length).toEqual(2)
      expect(toDoList.list[0].id).toEqual(1)
      expect(toDoList.list[1].id).toEqual(2)
    })
  })
})
