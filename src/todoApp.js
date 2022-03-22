const todoApp = {
  nextTodoId: 0,
  todoList: [],

  create: function (text, date) {
    this.nextTodoId++;
    if (!date) {
      date = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
    }

    const newTodoItem = {
      id: this.nextTodoId,
      description: text,
      status: "incomplete",
      date: date,
    };

    this.todoList.push(newTodoItem);
    return newTodoItem;
  },

  showAll: function () {
    if (this.todoList.length > 0)
      return this.todoList.map((todoItem) => {
        if (todoItem.description.length <= 20) {
          return todoItem;
        } else {
          return {
            ...todoItem,
            description: todoItem.description.slice(0, 20),
          };
        }
      });
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
    this.todoList = this.todoList.filter((todoItem) => todoItem.id !== id);
    return this.todoList;
  },

  searchByDay: function (date) {
    return this.todoList.filter((todoItem) => todoItem.date === date);
  },
};

module.exports = todoApp;
