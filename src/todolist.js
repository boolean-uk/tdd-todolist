class Todolist {
  constructor() {
    this.todoItems = [];
  }

  createTodoItem(id, text) {
    const todoItem =  { id: id, text: text, status: 'incomplete' };
    this.todoItems.push(todoItem)
    return todoItem;
  }

  getAll() {
    return this.todoItems;
  
  }

  setComplete(id) {
    const todoItem = this.todoItems.find(item => item.id === id);
    if (todoItem.status === 'incomplete') {
      todoItem.status = 'complete';
      return todoItem;
    }
  }
  getIncomplete() {
    const incompleteTodoItems = this.todoItems.map(item => {
      if(item.status === 'incomplete'){
        return item
      }
    });
    return incompleteTodoItems;
  }
  getComplete() {
    const completeTodoItems = this.todoItems.map(item => {
      if(item.status === 'complete'){
        return item
      }
    });
    return completeTodoItems;
  }
  getTodoById(id) {
    const todoById = this.todoItems.find(item => {
      if(item.id === id){
        return item
      }
      else return false
    })
    return todoById
  }
  removeTodo(id) {
    const todoIndex = this.todoItems.find((item, index) => {
      if(item.id === id){
        return index
      }
      else return false
    })
    this.todoItems.splice(todoIndex, 1)
    return this.todoItems
  }
}

export default Todolist;
