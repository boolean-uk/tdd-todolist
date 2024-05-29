import ToDoList from '../src/todolist.js'

describe('todolist', () => {
  it("exists", () => {
    const toDoList = new ToDoList()

    expect(toDoList.toDos.length).toBe(0)
  })

  it("creates toDos and adds to list", () => {
    const toDoList = new ToDoList()
    toDoList.createToDo('Do This')

    expect(toDoList.toDos[1].text).toBe('Do this')
  })
})
