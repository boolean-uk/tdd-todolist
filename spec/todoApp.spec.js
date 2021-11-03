const todoApp = require("../src/todoApp");

describe("Todo app", () => {
  afterEach(function () {
    todoApp.nextTodoId = 1;
    todoApp.todoList = [];
  });

  it("creates a todoItem", () => {
    // setup
    const text = "learn TDD";
    // execute
    const result = todoApp.create(text);
    //verify
    expect(result).toEqual({
      id: 1,
      description: text,
      status: "incomplete",
    });
  });

  it("increments IDs by one when adding new item", () => {
    // setup
    const task1 = "write tests";
    const task2 = "write tests";
    // execute
    const result1 = todoApp.create(task1);
    const result2 = todoApp.create(task2);
    //verify
    expect(result1).toEqual({
      id: 1,
      description: task1,
      status: "incomplete",
    });
    expect(result2).toEqual({
      id: 2,
      description: task2,
      status: "incomplete",
    });
  });

  it("returns error message if no description provided", () => {
    // setup
    const text = "";
    // execute
    const result = todoApp.create(text);
    //verify
    expect(result).toEqual("Error: you need to specify the description!!!");
  });

  it("shows all todo items if the array is not empty", () => {
    //   it("method showAll() returns array with todos when todos array has at least one item in it", () => {
    // setup
    const task1 = "write tests";
    const todo1 = todoApp.create(task1);
    const todoList = [todo1];
    // execute
    const result = todoApp.showAll();
    //verify
    expect(result).toEqual(todoList);
  });

  it("shows error message if the array is empty", () => {
    //it("method showAll() returns error message if the todos array is empty", () => {

    // setup
    const errorMessage = "There is nothing to do in this array...";
    // execute
    const result = todoApp.showAll();
    //verify
    expect(result).toEqual(errorMessage);
  });

  it("method setComplete() sets todo item's status to complete", () => {
    // setup
    const task1 = "write tests";
    const todo1 = todoApp.create(task1);
    // execute
    const result = todoApp.setComplete(todo1.id);
    //verify
    expect(result.status).toEqual("complete");
  });

  it("shows list of incomplete todos if there are any in array", () => {
    // setup
    const task1 = "write tests";
    const task2 = "write better tests";
    const task3 = "write even better tests";
    const todo1 = todoApp.create(task1);
    const todo2 = todoApp.create(task2);
    const todo3 = todoApp.create(task3);
    todoApp.setComplete(todo2.id);
    const incompleteTodoList = [todo1, todo3];

    // execute
    const result = todoApp.showIncomplete();

    //verify
    expect(result).toEqual(incompleteTodoList);
  });

  it("shows list of complete todos if there are any in array", () => {
    // setup
    const task1 = "write tests";
    const task2 = "write better tests";
    const task3 = "write even better tests";
    const task4 = "write automated tests";
    const todo1 = todoApp.create(task1);
    const todo2 = todoApp.create(task2);
    const todo3 = todoApp.create(task3);
    const todo4 = todoApp.create(task4);
    todoApp.setComplete(todo1.id);
    todoApp.setComplete(todo2.id);
    const completeTodoList = [todo1, todo2];

    // execute
    const result = todoApp.showComplete();

    //verify
    expect(result).toEqual(completeTodoList);
  });

  it("returns todo item if it exists in todo list", () => {
    // setup
    const task = "get some water!";
    const todo = todoApp.create(task);
    // execute
    const result = todoApp.searchById(1);
    // verify
    expect(result).toEqual(todo);
  });

  it("returns message if todo item doesn't exist in todo list", () => {
    // setup
    const message = "The task doesn't exist!";
    // execute
    const result = todoApp.searchById(1);
    // verify
    expect(result).toEqual(message);
  });
});
