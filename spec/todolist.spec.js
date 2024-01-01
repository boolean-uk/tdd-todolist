const {Todolist, existingTodoList}= require('../src/todolist.js')




describe('TDD todoList', () => {
  const todoItemListInstance = new Todolist()


describe('Can create a new todo', ()=>{
  it('creates a todo item with an ID, text description, and incomplete status', () => {
  
    const newTodoText = 'I am traveling'
    const newId = todoItemListInstance.todolist.length + 1
  
    const result = todoItemListInstance.create(newTodoText)
  
    expect(result).toEqual(this.todolists.length - 1)
  
    expect(result).toEqual({
      id: newId,
      text: newTodoText,
      status: 'incomplete'
    })
  })
})


  describe('Can see all the existing todoList',()=>{

    it('Get all todo items', () => {
      const result = todoItemListInstance.getAllTodo()
      expect(result).toBeTrue()
    })
  })

  describe('Can change the status of a todo by its ID',()=>{

    it('set a todo status to completed by its ID', () => {
      const result = todoItemListInstance.setComplete(1)
      expect(result).toEqual('status changed')
    })
  
    it('set a todo completed by its ID', () => {
      const result = todoItemListInstance.setComplete(4)
      expect(result).toEqual('Todo not found')
    })
  })


  describe('Can get all todos with incomplete status', ()=>{

    it('get todo items that are incomplete', () => {
      const allIncompleteTodo = existingTodoList.filter(
        (todo) => todo.status === 'incomplete'
      )
      const result = todoItemListInstance.getIncompleteTodos()
  
      expect(result).toEqual(allIncompleteTodo)
    })
  })





})
