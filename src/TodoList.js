class TodoList {
  items = [];

  create(text) {
    let item = {
      id: this.items.length + 1,
      text,
      status: "incomplete",
    };
    this.items.push(item);
    if (this.items.length === 1) return item;
    return this.items;
  }

  setItemComplete(id) {
    this.items.forEach((item) => {
      if (item.id === id) {
        item.status = "complete";
      }
    });
    return this.items;
  }

  getIncompletes() {
    let incompletes = this.items.filter((item) => item.status === "incomplete");
    return incompletes;
  }
  getCompletes() {
    let completes = this.items.filter((item) => item.status === "complete");
    return completes;
  }

  searchById(id) {
    const searchedId = this.items.find((item) => item.id === id);
    return searchedId || "It doesn't exist";
  }

  removeItem(id) {
    this.items.forEach((item, i) => {
      if (item.id === id) {
        this.items.splice(i, 1);
      }
    });
    return this.items;
  }
}

module.exports = TodoList;
