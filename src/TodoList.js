class TodoList {
    todos = []


create(text) {
    const todoToCreate = {
      id: this.todos.length + 1,
      text: text,
      status: "incomplete"
    };

    this.todos.push(todoToCreate)


    return todoToCreate
}
}

module.exports = TodoList


//  console.log("todoToCreate", todoToCreate) 
// console.log("todo array", this.todos)