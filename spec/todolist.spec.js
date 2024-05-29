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

  it('return a list of all toDos', () => {
    const toDoList = new ToDoList()
    toDoList.createToDo('Do This')
    toDoList.createToDo('Do That')
    toDoList.createToDo('Do Something')

    const allToDos = toDoList.getAllToDos()

    expect(allToDos[0].text).toBe('Do This')
    expect(allToDos[1].text).toBe('Do That')
    expect(allToDos[2].text).toBe('Do Something')
  })

  it('succesfully flip the status of toDos', () => {
    const toDoList = new ToDoList()
    const newToDo = toDoList.createToDo('Complete me')

    toDoList.setToDo(newToDo.id)

    expect(toDoList.toDos[0].complete).toBe(true)

    toDoList.setToDo(newToDo.id)

    expect(toDoList.toDos[0].complete).toBe(false)
  })

  it('returns a list of all complete toDos', () => {
    const toDoList = new ToDoList()

    const toDo1 = toDoList.createToDo('Do This')
    toDoList.createToDo('Do That')
    toDoList.createToDo('Do Something')

    expect(toDoList.getCompleteToDos().length).toBe(0)

    toDoList.setToDo(toDo1.id)

    expect(toDoList.getCompleteToDos()[0].id).toBe(toDo1.id)
  })

  it('returns a list of all incomplete toDos', () => {
    const toDoList = new ToDoList()

    const toDo1 = toDoList.createToDo('Do This')
    const toDo2 = toDoList.createToDo('Do That')
    const toDo3 = toDoList.createToDo('Do Something')

    expect(toDoList.getIncompleteToDos().length).toBe(3)

    toDoList.setToDo(toDo1.id)

    expect(toDoList.getIncompleteToDos()[0].id).toBe(toDo2.id)
    expect(toDoList.getIncompleteToDos()[1].id).toBe(toDo3.id)
  })

  it('returns only the toDo with the specified id', () => {
    const toDoList = new ToDoList()

    const toDo1 = toDoList.createToDo('Do This')
    const toDo2 = toDoList.createToDo('Do That')
    toDoList.createToDo('Do Something')

    expect(toDoList.searchToDos(toDo1.id).id).toBe(toDo1.id)
    expect(toDoList.searchToDos(toDo2.id).text).toBe(toDo2.text)
  })

  it('succesfully deletes todos', () => {
    const toDoList = new ToDoList()

    const toDo1 = toDoList.createToDo('Do This')

    expect(toDoList.searchToDos(toDo1.id).id).toBe(toDo1.id)

    toDoList.deleteToDo(toDo1.id)

    expect(() => {
      return toDoList.searchToDos(toDo1.id)
    }).toThrowError('There is no todo with this ID')
  })
})
