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
});

describe("TodoList", () => {
  it("gets all todo items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "make the bed",
        status: "incomplete",
      },
      {
        id: 2,
        text: "walk dogs",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("make the bed");
    todoList.create("walk dogs");
    const result = todoList.getAll();
    // verify
    expect(result).toEqual(expected);
  });
});

describe("TodoList", () => {
  it("sets todo item with specified ID to commplete", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "make the bed",
        status: "incomplete",
      },
      {
        id: 2,
        text: "walk dogs",
        status: "complete",
      },
    ];
    // execute
    todoList.create("make the bed");
    todoList.create("walk dogs");
    const result = todoList.setCompleteByID(2);
    // verify
    expect(result).toEqual(expected);
  });
});
