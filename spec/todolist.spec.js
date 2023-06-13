// import here


describe('TodoList', () => {
  it('Creates a new task with the user putting in a string', () => {
    // Given
    const newTodoList = new TodoList()
    const task = "make the bed"
    // When
    const result = toDoList.create(task)
    // Then
    expect(result) = {
      id: 1,
      text: "make the bed",
      status: "incomplete"
    }
  })
})
