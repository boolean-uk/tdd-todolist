class TodoList {
  todos = [];

  create(text) {
    const todoToCreate = {
      id: this.todos.length + 1,
      text: text,
      status: "incomplete",
    };

    this.todos.push(todoToCreate);

    return todoToCreate;
  }
}

module.exports = TodoList;

// Add a function/method (getalltodo) to your domain model.
// Add a test for the new method
// Run the tests (some will fail)
// Write/Update the code to pass the test.
