const TodoItem = require('../src/todoitem')
describe('TodoItem', () => {
  it('Should initialize ID and status properties', () => {
    const todoItem = new TodoItem('A task')

    expect(todoItem?.ID).toBeDefined()
    expect(todoItem?.status).toBeFalsy()
  })
})
