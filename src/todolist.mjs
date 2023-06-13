class Todolist {
  constructor(id, text) {
    this.id = id
    this.text = text
  }

  createTodoItem(id, text) {
    return { id: id, text: text, status: 'incomplete' };
  }
  
}

export default Todolist;
