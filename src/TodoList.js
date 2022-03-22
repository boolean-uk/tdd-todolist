class TodoList {
  constructor() {
    this.items = [];
    this.idCount = 1;
  }

  create(description) {
    const todo = {
      id: this.idCount,
      text: description,
      status: "incomplete",
    };
    this.idCount += 1;
    this.items.push(todo);
    return todo;
  }

  setToCompleted(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items[i].status = "completed";
        return this.items[i];
      }
    }
  }

  getCompleted() {
    let completed = this.items.filter((item) => item.status === "completed");
    return completed;
  }

  getIncompleted() {
    let incompleted = this.items.filter((item) => item.status === "incomplete");
    return incompleted;
  }

  //this one is not completed - i dont know how to add alternative test in case "ID does not exist"
  searchById(id) {
    let theSearchedItem = this.items.filter((item) => item.id === id);
    return theSearchedItem;
  }

  removeById(id) {
    let newArray = this.items.filter((item) => item.id !== id);
    return newArray;
  }
}

module.exports = TodoList;
