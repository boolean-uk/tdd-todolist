const TodoList = require("../dist/TodoList.js");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();

    todoList.createTodo("turn the heating on!");
    todoList.createTodo("buy milk");
  });

  it("creates a todo item", () => {
    const expected = {
      id: 3,
      task: "write a unit test",
      complete: false,
    };

    const result = todoList.createTodo("write a unit test");

    expect(result).toEqual(expected);
  });

  it("gets all todos", () => {
    const expected = [
      {
        id: 1,
        task: "turn the heating on!",
        complete: false,
      },
      {
        id: 2,
        task: "buy milk",
        complete: false,
      },
    ];

    const result = todoList.todos;

    expect(result).toEqual(expected);
  });

  it("set todo complete, by id", () => {
    const expected = {
      id: 2,
      task: "buy milk",
      complete: true,
    };

    const result = todoList.setComplete(2);

    expect(result).toEqual(expected);
  });

  it("get todos that are incomplete", () => {
    const expected = [
      {
        id: 1,
        task: "turn the heating on!",
        complete: false,
      },
    ];

    todoList.setComplete(2);
    const result = todoList.getIncomplete();

    expect(result).toEqual(expected);
  });

  it("get todos that are complete", () => {
    const expected = [
      {
        id: 2,
        task: "buy milk",
        complete: true,
      },
    ];

    todoList.setComplete(2);
    const result = todoList.getComplete();

    expect(result).toEqual(expected);
  });

  it("get todo by id", () => {
    const expected = {
      id: 2,
      task: "buy milk",
      complete: false,
    };

    const result = todoList.getTodo(2);

    expect(result).toEqual(expected);
  });

  it("remove todo by id", () => {
    const expected = {
      id: 1,
      task: "turn the heating on!",
      complete: false,
    };

    const result = todoList.deleteTodo(1);

    expect(result).toEqual(expected);
  });
});
