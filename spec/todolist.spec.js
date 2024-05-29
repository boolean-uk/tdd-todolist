import ToDoList from '../src/todolist.js'

describe('todolist', () => {
  it("exists", () => {
    const toDoList = new ToDoList()

    expect(toDoList).toBeInstanceOf(ToDoList)
  })
})
