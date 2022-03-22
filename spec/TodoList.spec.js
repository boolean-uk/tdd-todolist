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
    todoList.create("turn the heating on!");
    todoList.create("make the bed");

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
    const result = todoList.allToDoItems();
    // verify
    expect(result).toEqual(expected);
  });

  it("list to do all items for empty todoList", () => {
    // set up
    const todoList = new TodoList();

    const expected = [];
    // execute
    const result = todoList.allToDoItems();
    // verify
    expect(result).toEqual(expected);
  });
});
