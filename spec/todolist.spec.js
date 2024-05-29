import ToDoList from '../src/todolist.js'

describe('todolist', () => {
  it('exists', () => {
    const toDoList = new ToDoList()

    expect(toDoList.toDos.length).toBe(0)
  })

  it('creates toDos and adds to list', () => {
    const toDoList = new ToDoList()
    toDoList.createToDo('Do This')

    expect(toDoList.toDos[0].text).toBe('Do This')
  })

  it("display a list of all toDos", () => {
    const toDoList = new ToDoList()
    toDoList.createToDo('Do This')
    toDoList.createToDo('Do That')
    toDoList.createToDo('Do Something')

    const allToDos = toDoList.getAllToDos()

    expect(allToDos[0].text).toBe('Do This')
    expect(allToDos[1].text).toBe('Do That')
    expect(allToDos[2].text).toBe('Do Something')
  })
})
