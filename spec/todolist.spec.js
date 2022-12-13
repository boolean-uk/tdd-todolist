const { TodoList } = require('../src/todolist')

describe('Test of TodoList class', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  // newTodo
  it('expects newTodo to return nothing if empty value is given to it', () => {
    todoList.newTodo('')
    todoList.newTodo(null)
    expect(todoList.todos).toHaveSize(0)
  })
  it('expects newId of newTodo() to always be new', () => {
    todoList.newTodo('first todo')
    todoList.newTodo('second todo')
    const secondTodo = todoList.todos[1]
    expect(secondTodo.id).toBe(2)
  })
  it('expects newTodo to push to this.todos', () => {
    todoList.newTodo('do something')
    todoList.newTodo('do second something')
    expect(todoList.todos).toHaveSize(2)
  })

  // getAllTodos
  it('expects the array with all todos inside', () => {
    todoList.newTodo('do something')
    todoList.newTodo('do second something')
    expect(todoList.getAllTodos()).toHaveSize(2)
  })

  // removeTodo
  it('expects the removeTodo to return false if id does not exist', () => {
    expect(todoList.removeTodo(1)).toBeFalse()
  })
  it('expects the return of removeTodo to have length of 0 due to the removal by id', () => {
    todoList.newTodo('do something')
    expect(todoList.removeTodo(1)).toHaveSize(0)
  })

  // updateTodo
  it('expects the updateTodo to return false if id does not exist', () => {
    expect(todoList.updateTodo(1, true)).toBeFalse()
  })
  it('expects false if checked is not of type bool', () => {
    todoList.newTodo('do something')
    expect(todoList.updateTodo(1, 1234)).toBeFalse()
  })
})
