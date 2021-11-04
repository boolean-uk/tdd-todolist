const todoApp = require("../src/todoApp");

const today = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});

describe("Todo app", () => {
  afterEach(function () {
    todoApp.nextTodoId = 0;
    todoApp.todoList = [];
  });

  describe("create()", () => {
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
        date: today,
      });
    });

    it("increments IDs by one when adding new item", () => {
      // setup
      const task1 = "write tests";
      const task2 = "write tests";
      // execute
      const result1 = todoApp.create(task1);
      const result2 = todoApp.create(task2);
      //verify
      expect(result1).toEqual({
        id: 1,
        description: task1,
        status: "incomplete",
        date: today,
      });
      expect(result2).toEqual({
        id: 2,
        description: task2,
        status: "incomplete",
        date: today,
      });
    });
  });

  describe("showAll()", () => {
    it("returns all todo items if the array is not empty", () => {
      // setup
      const task1 = "write tests";
      const todo1 = todoApp.create(task1);
      const todoList = [todo1];
      // execute
      const result = todoApp.showAll();
      //verify
      expect(result).toEqual(todoList);
    });

    it("returns a full text description if there is a single todo item", () => {
      // setup
      const task = "write some good code";
      todoApp.create(task);
      // execute
      const result = todoApp.showAll();
      // verify
      expect(result[0].description).toEqual(task);
    });

    it("reduces text up to first 20chars if the text length is greater than 20", () => {
      // setup
      const task = "truncate this string if there are too many chars";
      expect(task.length).toBeGreaterThan(20);
      todoApp.create(task);
      // execute
      const result = todoApp.showAll();
      // verify
      expect(result[0].description.length).toEqual(20);
    });

    it("returns full text if the text length is less than or equal to 20", () => {
      // setup
      const task17char = "this is short one";
      expect(task17char.length).toEqual(17);
      const task20char = "This is twentyyyyyyy";
      expect(task20char.length).toEqual(20);

      todoApp.create(task17char);
      todoApp.create(task20char);
      // execute
      const result = todoApp.showAll();
      // verify

      expect(result[0].description.length).toEqual(task17char.length);

      expect(result[1].description.length).toEqual(task20char.length);
    });
  });

  describe("setComplete()", () => {
    it("sets todo item's status to complete", () => {
      // setup
      const task = "write tests";
      const todo = todoApp.create(task);
      // execute
      const result = todoApp.setComplete(todo.id);
      //verify
      expect(result.status).toEqual("complete");
    });
  });

  describe("showComplete()", () => {
    it("returns a list of complete todos", () => {
      // setup
      const task1 = "write tests";
      const task2 = "write better tests";
      const task3 = "write even better tests";
      const task4 = "write automated tests";
      const todo1 = todoApp.create(task1);
      const todo2 = todoApp.create(task2);
      const todo3 = todoApp.create(task3);
      const todo4 = todoApp.create(task4);
      todoApp.setComplete(todo1.id);
      todoApp.setComplete(todo2.id);
      const completeTodoList = [todo1, todo2];

      // execute
      const result = todoApp.showComplete();

      //verify
      expect(result).toEqual(completeTodoList);
    });
  });

  describe("showIncomplete()", () => {
    it("returns list of incomplete todos", () => {
      // setup
      const task1 = "write tests";
      const task2 = "write better tests";
      const task3 = "write even better tests";
      const todo1 = todoApp.create(task1);
      const todo2 = todoApp.create(task2);
      const todo3 = todoApp.create(task3);
      todoApp.setComplete(todo2.id);
      const incompleteTodoList = [todo1, todo3];

      // execute
      const result = todoApp.showIncomplete();

      //verify
      expect(result).toEqual(incompleteTodoList);
    });
  });

  describe("searchById()", () => {
    it("returns todo item if it exists in todo list", () => {
      // setup
      const task = "get some water!";
      const todo = todoApp.create(task);
      // execute
      const result = todoApp.searchById(1);
      // verify
      expect(result).toEqual(todo);
    });

    it("returns message if todo item doesn't exist in todo list", () => {
      // setup
      const message = "The task doesn't exist!";
      // execute
      const result = todoApp.searchById(1);
      // verify
      expect(result).toEqual(message);
    });
  });

  describe("removeById()", () => {
    it("returns a list without todo item", () => {
      // setup
      const task1 = "get some water!";
      const task2 = "get a little break!";
      const todo1 = todoApp.create(task1);
      const todo2 = todoApp.create(task2);
      // execute
      const result = todoApp.removeById(todo2.id);
      // verify
      expect(result).toEqual([todo1]);
    });
  });
});
