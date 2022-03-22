const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  //--------------------------------------------------------------------
  //Create a todo item that has an ID, text description, and starts off incomplete

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

  it("creates a second todo item with a differt description", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 1,
      text: "open the window",
      status: "incomplete",
    };
    // execute
    const result = todoList.create("open the window");
    // verify
    expect(result).toEqual(expected);
  });

  it("creating another 2 items and the ID is incremented", () => {
    // set up
    const todoList = new TodoList();
    const expected = {
      id: 2,
      text: "clean the bathroom",
      status: "incomplete",
    };
    // execute
    todoList.create("hoover");
    const result = todoList.create("clean the bathroom");
    // verify
    expect(result).toEqual(expected);
  });

  //Set a todo completed by its ID ----------------------------------------------------

  it("set the status to: completed, by ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = { id: 3, text: "task3", status: "completed" };
    // execute
    todoList.create("task1");
    todoList.create("task2");
    todoList.create("task3");
    const result = todoList.setToCompleted(3);
    // verify
    expect(result).toEqual(expected);
  });

  //Get only todo items that are completed---------------

  it("return completed items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [{ id: 2, text: "task5", status: "completed" }];
    // execute
    todoList.create("task4");
    todoList.create("task5");
    todoList.create("task6");
    todoList.setToCompleted(2);
    const result = todoList.getCompleted();
    // verify
    expect(result).toEqual(expected);
  });

  //Get incompleted items---------------------------

  it("return incompleted tasks", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      { id: 2, text: "task8", status: "incomplete" },
      { id: 3, text: "task9", status: "incomplete" },
    ];
    // execute
    todoList.create("task7");
    todoList.create("task8");
    todoList.create("task9");
    todoList.setToCompleted(1);
    const result = todoList.getIncompleted();
    // verify
    expect(result).toEqual(expected);
  });

  //Search and return a todo item by its ID, or return a message saying it doesn’t exist ------------------------------------------

  //this one is not completed - i dont know how to add alternative test in case "ID does not exist"

  it("search by ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 4,
        text: "task13",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("task10");
    todoList.create("task11");
    todoList.create("task12");
    todoList.create("task13");
    todoList.create("task14");
    const result = todoList.searchById(4);
    // verify
    expect(result).toEqual(expected);
  });

  //remove by ID --------------------------------------------------

  it("remove by ID", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: "task15",
        status: "incomplete",
      },
      {
        id: 3,
        text: "task17",
        status: "incomplete",
      },
      {
        id: 4,
        text: "task18",
        status: "incomplete",
      },
    ];
    // execute
    todoList.create("task15");
    todoList.create("task16");
    todoList.create("task17");
    todoList.create("task18");
    const result = todoList.removeById(2);
    // verify
    expect(result).toEqual(expected);
  });
});
