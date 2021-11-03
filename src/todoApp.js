const todoApp = {
  nextTodoId: 0,
  todoList: [],
  create: function (text) {
    this.nextTodoId++;
    let newTodoItem = null;
    if (text === "") {
      return "Error: you need to specify the description!!!";
    } else {
      newTodoItem = {
        id: this.nextTodoId,
        description: text,
        status: "incomplete",
      };
      this.todoList.push(newTodoItem);
      return newTodoItem;
    }
  },
  showAll: function () {
    if (this.todoList.length === 1) return this.todoList;

    if (this.todoList.length > 1)
      return this.todoList.map((todoItem) => {
        return { ...todoItem, description: todoItem.description.slice(0, 20) };
      });

    if (this.todoList.length === 0)
      return "There is nothing to do in this array...";
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
  searchById: function (id) {
    const foundItem = this.todoList.find((todoItem) => todoItem.id === id);
    if (!foundItem) return "The task doesn't exist!";
    return foundItem;
  },
  removeById: function (id) {
    const index = this.todoList.findIndex((todoItem) => todoItem.id === id);
    this.todoList.splice(index, 1);
    return `Todo with id:${id} was removed successfully!`;
  },
};

module.exports = todoApp;
