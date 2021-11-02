const todoApp = {
  nextTodoId: 1,
  todoList: [],
  create: function (text) {
    let id = this.nextTodoId++;
    let newTodoItem = null;
    if (text === "") {
      return "Error: you need to specify the description!!!";
    } else {
      newTodoItem = {
        id,
        description: text,
        status: "incomplete",
      };
      this.todoList.push(newTodoItem);
      return newTodoItem;
    }
  },
};

module.exports = todoApp;
