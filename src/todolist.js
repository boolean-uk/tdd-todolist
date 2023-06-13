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
    if (todoItem) {
      todoItem.status = 'complete';
      return todoItem;
    }
  }
}


export default Todolist;
