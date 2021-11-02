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
});
