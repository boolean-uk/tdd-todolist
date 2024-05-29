import { TodosList, Todo } from '../src/todolist.js'

describe('todo', () => {
  it('should have an id and text and status', () => {
    const todo1 = new Todo(1, 'Finish the Exercise', false)

    expect(todo1.id).toBe(1)
    expect(todo1.text).toBe('Finish the Exercise')
    expect(todo1.status).toBe(false)

    const todo2 = new Todo(
      2,
      'commits a lot Or You will have a chat will Nathan',
      true
    )

    expect(todo2.id).toBe(2)
    expect(todo2.text).toBe('commits a lot Or You will have a chat will Nathan')
    expect(todo2.status).toBe(true)
  })
})

describe('todosList', () => {
  it('should create a todo', () => {
    const todo1 = new Todo(1, 'Finish the Exercise', false)
    expect(todo1.id).toBe(1)
    expect(todo1.text).toBe('Finish the Exercise')
    expect(todo1.status).toBe(false)
  })

  it('should get a list of Todos', () => {
    const todosList = new TodosList()

    expect(todosList.todosList.length).toBe(0)

    const todo1 = new Todo(1, 'Finish the Exercise', false)
    const getTodosList = todosList.add(todo1)

    expect(todosList.todosList.length).toBe(1)
    expect(getTodosList.length).toBe(1)
    expect(todosList.todosList[0]).toEqual(todo1)
  })

  it('should search for todo by id', () => {
    const todosList = new TodosList()
    expect(todosList.search(0)).toBeFalse()

    const todo1 = new Todo(1, 'Finish the Exercise', false)
    todosList.add(todo1)
    expect(todosList.search(1)).toBeTrue()
  })

  it('it should remove a todo by id', () => {
    const todosList = new TodosList()
    expect(todosList.remove(0)).toBeFalse()

    const todo1 = new Todo(1, 'Finish the Exercise', false)
    todosList.add(todo1)
    expect(todosList.todosList.length).toBe(1)
    expect(todosList.todosList[0]).toEqual(todo1)
    expect(todosList.remove(1)).toBeTrue()
    expect(todosList.todosList.length).toBe(0)

    const todo2 = new Todo(
      2,
      'commits a lot Or You will have a chat will Nathan',
      true
    )
    const todo3 = new Todo(3, 'Finish the Exercise', false)
    todosList.add(todo2)
    todosList.add(todo3)
    expect(todosList.todosList.length).toBe(2)
    expect(todosList.todosList[0]).toEqual(todo2)
    expect(todosList.todosList[1]).toEqual(todo3)
    expect(todosList.remove(3)).toBeTrue()
    expect(todosList.todosList.length).toBe(1)
  })

  it('sould take list if inCompleted todos', () => {
    const todosList = new TodosList()
    expect(todosList.getCompleted()).toEqual([])
    const todo1 = new Todo(1, 'Finish the Exercise', true)
    todosList.add(todo1)
    expect(todosList.getCompleted()).toEqual([todo1])

    const todo2 = new Todo(
      2,
      'commits a lot Or You will have a chat will Nathan',
      true
    )
    const todo3 = new Todo(3, 'Finish the Exercise', false)
    todosList.add(todo2)
    todosList.add(todo3)
    expect(todosList.getCompleted()).toEqual([todo1, todo2])
    expect(todosList.remove(2)).toBeTrue()
    expect(todosList.getCompleted()).toEqual([todo1])
  })
  // it('should take list of completed todos ', () => {

  // })
})
