class TodoList {
  constructor() {
    this.todoList = [];
  }

  create(text) {
    const todo = {
      id: this.todoList.length + 1,
      text: text,
      status: "incomplete",
    };

    this.todoList.push(todo);

    return this.todoList;
  }
}

module.exports = TodoList;
