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
    let todo;
    beforeEach(() => {
      todo = todoApp.create("learn TDD!");
    });

    it("creates a todoItem", () => {
      const expected = {
        id: todo.id,
        description: todo.description,
        status: todo.status,
        date: todo.date,
      };

      expect(todo).toEqual(expected);
    });

    it("increments IDs by one when adding new item", () => {
      const todo1 = todoApp.create("DRY out the tests!");

      expect(todo.id).toEqual(1);
      expect(todo1.id).toEqual(2);
    });
  });

  describe("showAll()", () => {
    it("returns all todo items if the array is not empty", () => {
      const todo1 = todoApp.create("write tests");
      const todo2 = todoApp.create("write more tests");
      const result = todoApp.showAll();

      expect(result).toEqual([todo1, todo2]);
    });

    it("returns a full text description if there is a single todo item", () => {
      const task = "write some good code";
      todoApp.create(task);

      const result = todoApp.showAll();

      expect(result[0].description).toEqual(task);
    });

    it("reduces text up to first 20chars if the text length is greater than 20", () => {
      const task = "truncate this string if there are too many chars";
      expect(task.length).toBeGreaterThan(20);
      todoApp.create(task);

      const result = todoApp.showAll();

      expect(result[0].description.length).toEqual(20);
    });

    it("returns full text if the text length is less than or equal to 20", () => {
      const task17char = "this is short one";
      expect(task17char.length).toEqual(17);
      const task20char = "This is twentyyyyyyy";
      expect(task20char.length).toEqual(20);

      todoApp.create(task17char);
      todoApp.create(task20char);

      const result = todoApp.showAll();

      expect(result[0].description.length).toEqual(task17char.length);

      expect(result[1].description.length).toEqual(task20char.length);
    });
  });

  describe("setComplete()", () => {
    it("sets todo item's status to complete", () => {
      const todo = todoApp.create("write tests");
      todoApp.setComplete(todo.id);

      expect(todo.status).toEqual("complete");
    });
  });

  describe("showComplete()", () => {
    it("returns a list of complete todos", () => {
      const todo1 = todoApp.create("write tests");
      const todo2 = todoApp.create("write better tests");
      const todo3 = todoApp.create("write automated tests");
      todoApp.setComplete(todo1.id);
      todoApp.setComplete(todo2.id);
      const completeTodoList = [todo1, todo2];

      const result = todoApp.showComplete();

      expect(result).toEqual(completeTodoList);
    });
  });

  describe("showIncomplete()", () => {
    it("returns list of incomplete todos", () => {
      const todo1 = todoApp.create("write tests");
      const todo2 = todoApp.create("write better tests");
      todoApp.setComplete(todo2.id);
      const incompleteTodoList = [todo1];

      const result = todoApp.showIncomplete();

      expect(result).toEqual(incompleteTodoList);
    });
  });

  describe("searchById()", () => {
    it("returns todo item if it exists in todo list", () => {
      const task = "get some water!";
      const todo = todoApp.create(task);

      const result = todoApp.searchById(1);

      expect(result).toEqual(todo);
    });

    it("returns message if todo item doesn't exist in todo list", () => {
      const message = "The task doesn't exist!";

      const result = todoApp.searchById(1);

      expect(result).toEqual(message);
    });
  });

  describe("removeById()", () => {
    it("returns a list without todo item", () => {
      const task1 = "get some water!";
      const task2 = "get a little break!";
      const todo1 = todoApp.create(task1);
      const todo2 = todoApp.create(task2);

      const result = todoApp.removeById(todo2.id);
      expect(result).toEqual([todo1]);
    });
  });

  describe("searchByDay()", () => {
    let todo1, todo2;
    beforeEach(() => {
      todo1 = todoApp.create("Take A break!", "06/11/2021");
      todo2 = todoApp.create("Make a cup of tea!", "06/11/2021");
    });

    it("returns todos by the date that they were created ", () => {
      const result = todoApp.searchByDay("06/11/2021");
      expect(result).toEqual([todo1, todo2]);
    });

    it("returns an empty array if there are no todos for that day", () => {
      const result = todoApp.searchByDay("13/11/2021");
      expect(result).toEqual([]);
    });
  });
});
