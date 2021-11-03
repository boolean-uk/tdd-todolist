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
  showAll: function () {
    if (this.todoList.length > 0) {
      return this.todoList;
    } else {
      return "There is nothing to do in this array...";
    }
  },
  showIncomplete: function () {
    return this.todoList.filter((todoItem) => todoItem.status === "incomplete");
  },
  setComplete: function (id) {
    const foundItem = this.todoList.find((todoItem) => todoItem.id === id);
    foundItem.status = "complete";
    return foundItem;
  },
  showComplete: function () {
    return this.todoList.filter((todoItem) => todoItem.status === "complete");
  },
};

module.exports = todoApp;
