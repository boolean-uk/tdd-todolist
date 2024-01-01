

const createToDo = (input, toDoList) => {
    const num = toDoList.length + 1
  
    const toDoItem = {
      id: num,
      description: input,
      complete: false
    }
  
    if (typeof input === 'string') {
      return toDoItem
    } else return false
  }
  
  const getToDo = (toDoList) => {
    if (toDoList.length > 0) return toDoList
    return false
  }
  
  const setToDoComplete = (id, toDoList) => {
    const itemToEdit = searchToDo(id, toDoList)
    if (typeof itemToEdit === 'object') {
      itemToEdit.complete = true
      return true
    }
  
    return false
  }
  
  const getToDoIncomplete = (toDoList) => {
    const incompleteItems = toDoList.filter((item) => !item.complete)
  
    if (incompleteItems.length > 0) return incompleteItems
    return false
  }
  
  const getToDoComplete = (toDoList) => {
    const completeItems = toDoList.filter((item) => item.complete)
  
    if (completeItems.length > 0) return completeItems
    return false
  }
  
  const searchToDo = (id, toDoList) => {
    if (typeof id !== 'number') return false
  
    const itemToFind = toDoList.find((item) => item.id === id)
  
    if (typeof itemToFind === 'object') return itemToFind
  
    return 'Item not found'
  }
  
  const removeItem = (id, toDoList) => {
    const indexToDelete = toDoList.findIndex((item) => item.id === id)
  
    if (indexToDelete === -1) return false
    toDoList.splice(indexToDelete, 1)
  
    return true
  }
  
  module.exports = {
    createToDo,
    getToDo,
    setToDoComplete,
    getToDoIncomplete,
    getToDoComplete,
    searchToDo,
    removeItem
  }



console.log('==================================')






  const todos = [
    {
      id: 1,
      text: 'I will be going to the gym',
      status: 'incomplete'
    },
    {
      id: 2,
      text: 'I am going for a date',
      status: 'incomplete'
    }
  ]
  const todoListInstance = new Todolist(todos)

  it('creates a todo item with an ID, text description, and incomplete status', () => {
    const newTodoText = 'I am traveling'
    const result = todoListInstance.create(newTodoText)

    const newId = todoListInstance.todolist.length + 1

    expect(result).toEqual({
      id: newId,
      text: newTodoText,
      status: 'incomplete'
    })
  })



  it('set a todo completed by its ID', () => {
    const result = todoListInstance.setComplete(todos)
    expect(result).toBe({
      id: 2,
      text: 'I am going for a date',
      status: 'complete'
    })
  })

  it('get todo items that are incomplete', () => {
    const allIncompleteTodo = todos.filter(
      (todo) => todo.status === 'incomplete'
    )
    const result = todoListInstance.getIncompleteTodos()

    expect(result).toEqual(allIncompleteTodo)
  })

  it('get todo items that are complete', () => {
    const allCompleteTodo = todos.filter((todo) => todo.status === 'complete')
    const result = todoListInstance.getCompleteTodos()

    expect(result).toEqual(allCompleteTodo)
  })

  it('Search and return a todo item by its ID, or return a message saying it doesn’t exist', () => {
    const todoId = 2
    const searchTodowithId = todos.find((todo) => todo.id === todoId)
    const searchResult = searchTodowithId || 'doesnt exist'
    const result = todoListInstance.searchTodoById(searchResult)
    expect(result).toEqual(searchResult)
  })

  it('Remove a todo item by its ID', () => {
    const idTobeRemoved = 2

    const removeTodowithId = todos.filter((todo) => todo.id !== idTobeRemoved)

    const result = todoListInstance.removeById()

    expect(result).toEqual(removeTodowithId)
  })

