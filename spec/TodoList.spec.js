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
  it("add item to items", () => {
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
  it("add multiple items", () => {
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
        text: "turn the aircon on!",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    const result = todoList.create("turn the aircon on!");

    // verify
    expect(result).toEqual(expected);
  });
  it("turn complete by ID", () => {
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
        text: "turn the aircon on!",
        status: "complete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("turn the aircon on!");
    const result = todoList.setItemComplete(2);

    // verify
    expect(result).toEqual(expected);
  });
  it("get incomplete items", () => {
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
        text: "turn the aircon off!",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("turn the aircon on!");
    todoList.create("turn the aircon off!");
    todoList.setItemComplete(2);
    const result = todoList.getIncompletes();

    // verify
    expect(result).toEqual(expected);
  });
  it("get complete items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 2,
        text: "turn the aircon on!",
        status: "complete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("turn the aircon on!");
    todoList.create("turn the aircon off!");
    todoList.setItemComplete(2);
    const result = todoList.getCompletes();

    // verify
    expect(result).toEqual(expected);
  });
  it("search by ID with valid ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };

    // execute
    todoList.create("turn the heating on!");
    todoList.create("turn the aircon on!");
    todoList.create("turn the aircon off!");
    todoList.setItemComplete(2);
    const result = todoList.searchById(1);

    // verify
    expect(result).toEqual(expected);
  });
  it("search by ID without valid ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = "It doesn't exist";

    // execute
    todoList.create("turn the heating on!");
    todoList.create("turn the aircon on!");
    todoList.create("turn the aircon off!");
    todoList.setItemComplete(2);
    const result = todoList.searchById(4);

    // verify
    expect(result).toEqual(expected);
  });
  it("remove a TODO item by its ID", () => {
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
        text: "turn the aircon on!",
        status: "complete",
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create("turn the aircon on!");
    todoList.create("turn the aircon off!");
    todoList.setItemComplete(2);
    const result = todoList.removeItem(3);

    // verify
    expect(result).toEqual(expected);
  });
});
