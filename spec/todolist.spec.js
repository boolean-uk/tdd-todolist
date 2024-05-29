import { TodosList, Todo } from "../src/todolist.js"

describe('todo', () => {
  it('should have an id and text and status', () => {
    const todo1 = new Todo(1, 'Finish the Exercise', false)

    expect(todo1.id).toBe(1)
    expect(todo1.text).toBe('Finish the Exercise')
    expect(todo1.status).toBe(false)

    const todo2 = new Todo(2, 'Finish the Exercise', false)

    expect(todo2.id).toBe(2)
    expect(todo2.text).toBe('commits a lot Or You will have a chat will Nathan')
    expect(todo2.status).toBe(true)
  })
})

describe('todosList', () => {
  it('should have a list of Todos', () => {
    const todosList = new TodosList()
  })
})

