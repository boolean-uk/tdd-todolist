const TodoItem = require("./TodoItem");
const DateUtils = require("./utils/Date")
class TodoList {
  /**
   *
   * @param {Array} items already existing items
   */
  constructor(items = []) {
    this.items = items;
  }

  create = (text) => {
    let item = new TodoItem(this.items.length + 1, text);
    this.items.push(item);
    return item;
  };

  getAll = () => {
    return this.items;
  };

  getItemById = (id) => {
    return this.items.filter((item) => item.id === id)[0];
  };

  getItemsByDate = (date) => {
    
    return this.items.filter(item => DateUtils.datesAreOnSameDay(date, item.date))
  }

  setCompleted = (id) => {
    const changingItem = this.getItemById(id);
    if (changingItem) changingItem.status = "completed";
    return changingItem;
  };

  getIncomplete = () => {
    return this.items.filter((item) => item.status === "incomplete");
  };

  getCompleted = () => {
    return this.items.filter((item) => item.status === "completed");
  };

  remove = (id) => {
    const toDelete = this.getItemById(id);
    if (toDelete)
      return this.items.splice(this.items.indexOf(toDelete), 1).length === 1;
    return false;
  };
}

module.exports = TodoList;
