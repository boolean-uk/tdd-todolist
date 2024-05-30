import { ToDoItem, ToDosList } from '../src/todolist.js'

describe('todo', () => {
  it('Should have a task description, isComplete must be false and must have an id of 0 for the 1st task and 1 for the 2nd', () => {
    const todo1 = new ToDoItem(1, 'Test_task_1')
    expect(todo1.id).toBe(1)
    expect(todo1.taskDescr).toBe('Test_task_1')
    expect(todo1.isComplete).toBe(false)

    const todo2 = new ToDoItem(2, 'Test_task_2')
    expect(todo2.id).toBe(2)
    expect(todo2.taskDescr).toBe('Test_task_2')
    expect(todo2.isComplete).toBe(false)
  })
})

describe('To Dos list', () => {
  it('Should be an array with 0 length', () => {
    const toDosList = new ToDosList()
    expect(toDosList.toDos.length).toBe(0)
  })

  it('Should be an array with length 0 at first and 1 after adding a ToDoItem', () => {
    const toDosList = new ToDosList()
    expect(toDosList.toDos.length).toBe(0)

    toDosList.addToDo('test the code')
    expect(toDosList.toDos.length).toBe(1)
    expect(toDosList.toDos[0].id).toBe(1)
    expect(toDosList.toDos[0].taskDescr).toBe('test the code')
  })

  it('should return a list of added ToDos', () => {
    const toDosList = new ToDosList()

    toDosList.addToDo('test the code')
    toDosList.addToDo('re-test the code')
    toDosList.addToDo('test the code again')

    expect(toDosList.toDos.length).toBe(3)

    const getAllTd = toDosList.getAllTodos()
    expect(getAllTd.length).toBe(3)
    expect(getAllTd[0].id).toBe(1)
    expect(getAllTd[0].taskDescr).toBe('test the code')
    expect(getAllTd[2].id).toBe(3)
    expect(getAllTd[2].taskDescr).toBe('test the code again')
  })

  it('should turn is complete to true if To Do is found and is false, and should return false if not found or is already completed', () => {
    const toDosList = new ToDosList()
    toDosList.addToDo('test the code')
    toDosList.addToDo('re-test the code')
    toDosList.addToDo('test the code again')

    toDosList.setCompleted(1)
    expect(toDosList.toDos[0].isComplete).toBe(true)

    toDosList.setCompleted(1)
    expect(toDosList.toDos[0].isComplete).toBe(true)
    expect(toDosList.setCompleted(1)).toBe(false)

    toDosList.setCompleted(11)
    expect(toDosList.setCompleted(11)).toBe(false)
  })

  it('should return all completed todos', () => {
    const toDosList = new ToDosList()
    toDosList.addToDo('test the code')
    toDosList.addToDo('re-test the code')
    toDosList.addToDo('test the code again')

    toDosList.setCompleted(1)
    toDosList.setCompleted(2)

    console.log(toDosList)

    const comp = toDosList.getCompleted()
    console.log('inT', comp)
    expect(comp.length).toBe(2)
  })
})
