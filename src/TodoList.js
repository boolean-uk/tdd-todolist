class TodoList {
    constructor(){
        this.idCount = 1
    }

  create(description) {
    const todo = {
      id: this.idCount,
      text: description,
      status: "incomplete",
    };
    this.idCount += 1
    console.log(todo)
    return todo
  }


}

module.exports = TodoList;
