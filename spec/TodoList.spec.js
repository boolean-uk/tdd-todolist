const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };
    // execute
    const result = todoList.create("turn the heating on!");
    // verify
    expect(result).toEqual(expected);
  });

  it("list an all to do items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
      {
        id: 2,
        text: "make the bed",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    const result = todoList.allToDoItems();
    // verify
    expect(result).toEqual(expected);
  });

  it("set a todo complete by ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
      {
        id: 2,
        text: "make the bed",
        status: "complete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    const result = todoList.toDoCompleted(2);
    // verify
    expect(result).toEqual(expected);
  });

  it("Incomplete items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
      {
        id: 3,
        text: "do the dishes",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    todoList.create("do the dishes");
    todoList.toDoCompleted(2);
    const result = todoList.toDoItemsIncomplete();
    // verify
    expect(result).toEqual(expected);
  });

  it("Complete items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 2,
        text: "make the bed",
        status: "complete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    todoList.create("do the dishes");
    todoList.toDoCompleted(2);
    const result = todoList.toDoItemsComplete();
    // verify
    expect(result).toEqual(expected);
  });

  it("Valid ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    todoList.create("do the dishes");
    todoList.toDoCompleted(2);
    const result = todoList.getToDoId(1);
    // verify
    expect(result).toEqual(expected);
  });

  it("No Valid ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = "It doesn't exist";
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    todoList.create("do the dishes");
    todoList.toDoCompleted(2);
    const result = todoList.getToDoId(4);
    // verify
    expect(result).toEqual(expected);
  });

  it("Remove a todo item", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("make the bed");
    todoList.create("do the dishes");
    todoList.toDoCompleted(2);
    const result = todoList.removeToDoItemID(2);
    // verify
    expect(result).toEqual(expected);
  });
});
