import { TodosList, Todo } from "../src/todolist.js"

describe('todo', () => {
  it('should have an id and text and status', () => {
    const todo1 = new Todo(1, 'Finish the Exercise', false)
  })
})

describe('todosList', () => {
  it('should have a list of Todos', () => {
    const todosList = new TodosList()
  })
})

