class ToDoItem {
  constructor(id, taskDescr) {
    this.id = id
    this.taskDescr = taskDescr
    this.isComplete = false
  }
}

class ToDosList {
  constructor() {
    this.toDos = []
  }

  addToDo(taskDescr) {
    this.toDos.push(new ToDoItem(this.toDos.length + 1, taskDescr))
    return this.toDos
  }

  // allTodos()
}

// const test1  = new ToDosList
// function testing() {
//     test1.addToDo('test1')
//     test1.addToDo('test2')
//     test1.addToDo('test3')
//     console.log(test1);
//     // return test1

// }
// console.log(testing());

// const test2 = new ToDosList()
// test2.addToDo('test2')
// const test3 = new ToDosList
// test3.addToDo('test3')
// console.log(test2);
// console.log(test3);
// console.log(test1.toDos.length);
// console.log(test3.toDos.length);

export { ToDoItem, ToDosList }
