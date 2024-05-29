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
    
    toDoList.getAllToDos()
  })
})
