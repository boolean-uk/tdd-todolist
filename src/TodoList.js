const todoApp = {
  id: 0, // id for keeping track of each object valule

  todos: [],

  create: function (text) {
    this.id++; // incrementing the value

    const todo = {
      id: this.id,
      text: text,
      status: "incomplete",
    };

    this.todos.push(todo);
    // console.log("this.todos: ", this.todos)
    return todo;
  },

  showAll: function () {
    return this.todos;
  },

  setCompleted: function (id) {
    const todo = this.todos.find((todo) => todo.id);
    todo.status = "complete";

    return todo;
  },

  showCompleted: function () {
    // console.log("complete todos: ", this.todos)
    const completed = this.todos.filter((todo) => todo.status === "complete");
    // console.log("complete: ", completed)
    return completed;
  },

  showIncompleted: function () {
    // console.log("todos: ", this.todos )
    const incomplete = this.todos.filter(
      (todo) => todo.status === "incomplete"
    );

    // console.log("incomplete: ", incomplete)
    return incomplete;
    // return this.todos.filter(todo => todo.status === "incomplete") optimised version
  },

  remove: function (id) {
    const index = this.todos.find((todo) => todo.id === id); // find the index of the todo

    this.todos.splice(index, 1); // splice/remove the todo from the array

    return this.todos; // return the updated array
  },

  search: function (id) {
    if (this.todos.find((todo) => todo.id === id)) {
      return this.todos.find((todo) => todo.id === id);
    } else {
      return "not found";
    }
  },
};

module.exports = todoApp;
