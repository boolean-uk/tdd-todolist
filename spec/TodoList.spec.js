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

  it("creates a different todo item", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 2,
      text: "water the plants!",
      status: "incomplete",
    };
    // execute
    const result = todoList.create("water the plants!");
    // verify
    expect(result).toEqual(expected);
  });

  fit("return the todo list", () => {
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
    const result = todoList.create("turn the heating on!");
    // verify
    expect(result).toEqual(expected);
  });
});
