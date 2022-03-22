const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  it("creates a todo", () => {
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

  it("creates a new todo and display the todo list", () => {
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
        text: "water the plants!",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("water the plants!");
    const result = todoList.displayTodoList();
    // verify
    expect(result).toEqual(expected);
  });

  it("return the todos that are incomplete", () => {
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
        text: "water the plants!",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("water the plants!");
    const result = todoList.isComplete("incomplete");
    // verify
    expect(result).toEqual(expected);
  });
});
