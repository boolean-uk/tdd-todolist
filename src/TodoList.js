class TodoList {
  constructor() {
    this.toDoArray = [];
  }

  create(text) {
    const todoItem = {
      id: this.toDoArray.length + 1,
      text: text,
      status: "incomplete",
    };

    this.toDoArray.push(todoItem);

    return todoItem;
  }

  getAll() {
    return this.toDoArray;
  }

  setCompleteByID(ID) {
    this.toDoArray.forEach((toDoItem) => {
      if (toDoItem.id === ID) {
        toDoItem.status = "complete";
      }
    });

    return this.toDoArray;
    // alternative method using .find()
    // let item = this.toDoArray.find((item) => item.id === ID);
    // if (item === undefined) throw new Error("cant find item");
    // item.status = "complete";
    // return item;
  }
}

// const todoList = new TodoList();
// todoList.create("test");
// todoList.getAll();

module.exports = TodoList;
