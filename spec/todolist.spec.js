const { createToDo } = '../src/todolist'

console.log(createToDo)
describe('create todos', () => {
  console.log(createToDo)
  it('description is valid', () => {
    const expectedResult = {
      description: 'Test',
      complete: false
    }

    expect(createToDo('Test')).toBe(expectedResult)
  })
})
