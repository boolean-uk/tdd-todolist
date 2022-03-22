class TodoList {
  constructor() {
    this.todos = []; // After the constructor is ran, this is the state of the instance.
  }

  create(text) {
    const item = {
      id: this.todos.length + 1,
      text: text,
      status: "incomplete",
    };

    this.todos.push(item);

    return item;
  }

  allToDoItems() {
    return this.todos;
  }

  toDoCompleted(id) {
    this.todos.forEach((item) => {
      if (item.id === id) {
        item.status = "complete";
      }
    });
    return this.todos;
  }

  toDoItemsIncomplete() {
    let incompletes = this.todos.filter((item) => item.status === "incomplete");
    return incompletes;
  }

  toDoItemsComplete() {
    let complete = this.todos.filter((item) => item.status === "complete");
    return complete;
  }

  getToDoId(id) {
    const validId = this.todos.find((item) => item.id === id);
    return validId || "It doesn't exist";
  }

  removeToDoItemID(id) {
    this.todos.forEach((item, i) => {
      if (item.id === id) {
        this.todos.splice(i, 2);
      }
    });
    return this.todos;
  }
}

module.exports = TodoList;

// Add a function/method (getalltodo) to your domain model.
// Add a test for the new method
// Run the tests (some will fail)
// Write/Update the code to pass the test.
