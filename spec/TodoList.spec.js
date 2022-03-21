const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 0,
      text: "turn the heating on!",
      status: "incomplete"
    };
    // execute
    const result = todoList.create("turn the heating on!");
    // verify
    expect(result).toEqual(expected);
  });

  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 0,
      text: "feed the cat!",
      status: "incomplete"
    };
    // execute
    const result = todoList.create("feed the cat!");
    // verify
    expect(result).toEqual(expected);
  });

  it("returns array of todo items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 0,
        text: "turn the heating on!",
        status: "incomplete"
      },
      {
        id: 1,
        text: "feed the cat",
        status: "incomplete"
      }
    ];
    todoList.create("turn the heating on!");
    todoList.create("feed the cat");
    // execute
    const result = todoList.getAllTodo();
    // verify
    expect(result).toEqual(expected);
  });

  it("deletes item by ID=1   ", () => {
    // set up
    const todoList = new TodoList();
    todoList.create("turn the heating on!");
    todoList.create("feed the cat");
    const expected = [
      {
        id: 0,
        text: "turn the heating on!",
        status: "incomplete"
      }
    ];
    // execute

    const result = todoList.deleteItemById(1);
    // verify
    expect(result).toEqual(expected);
  });

  it("updates status by ID=1 ", () => {
    // set up
    const todoList = new TodoList();
    todoList.create("turn the heating on!");
    todoList.create("feed the cat");
    const expected = [
      {
        id: 0,
        text: "turn the heating on!",
        status: "incomplete"
      },
      {
        id: 1,
        text: "feed the cat",
        status: "complete"
      }
    ];
    // execute

    const result = todoList.completeById(1);

    // verify
    expect(result).toEqual(expected);
  });
});
