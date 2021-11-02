const todoApp = require("../src/todoApp");

describe("Todo app", () => {
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

  it("creates a todoItem", () => {
    // setup
    const text = "write tests";
    // execute
    const result = todoApp.create(text);
    //verify
    expect(result).toEqual({
      id: 2,
      description: text,
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
    // setup
    const todoList = [{ id: 1, description: "write tests" }];
    // execute
    const result = todoApp.showAll();
    //verify
    expect(result).toEqual(todoList);
  });

  it("shows error message if the array is empty", () => {
    // setup
    const errorMessage = "There is nothing to do in this array...";
    // execute
    const result = todoApp.showAll();
    //verify
    expect(result).toEqual(errorMessage);
  });
});
