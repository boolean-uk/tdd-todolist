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
  }

  isComplete(status) {
    const statusTodo = this.todoList.filter((todo) => {
      return todo.status === status;
    });
    return statusTodo;
  }
}

module.exports = TodoList;
