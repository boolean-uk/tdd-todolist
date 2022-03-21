/*
counter = 0
1 - create increments counter by 1, create item with id = counter
2- push
*/

class TodoList {
  todoArray = [];
  counter = 0;
  create(input) {
    const item = {
      id: this.counter,
      text: input,
      status: "incomplete"
    };

    this.todoArray.push(item);
    this.counter += 1;
    return item;
  }

  getAllTodo() {
    return this.todoArray;
  }

  completeById(idx) {
    this.todoArray[idx].status = "complete";
    return this.todoArray;
  }

  deleteItemById(idx) {
    return this.todoArray.filter((item) => item.id != idx);
  }
}

module.exports = TodoList;
