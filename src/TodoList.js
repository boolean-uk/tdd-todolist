class TodoList {
  constructor() {
    this.todoList = [];
  }

  displayTodoList() {
    return this.todoList;
  }

  create(text) {
    const todo = {
      id: this.todoList.length + 1,
      text: text,
      status: "incomplete",
    };

    this.todoList.push(todo);

    return todo;
  }

  isComplete(status) {
    return this.todoList.filter((todo) => todo.status === status);
  }
}

module.exports = TodoList;
