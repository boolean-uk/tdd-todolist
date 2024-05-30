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
    this.toDos.push(new ToDoItem(this.toDos.length+1, taskDescr))
    return this.toDos
  }

    getAllTodos() {
      return this.toDos
    }
    
    setCompleted(id) {
        const task = this.toDos.find((td) => td.id = id)
        if (task && task.isComplete === false) {
            task.isComplete = true
        } else {
            console.log('To Do item not found or To Do is already completed');
            return false
        }
    }


}

const test1  = new ToDosList
function testing() {
    test1.addToDo('test1')
    test1.addToDo('test2')
    test1.addToDo('test3')

    test1.setCompleted(1)
    console.log('t1',test1);
    return test1

}
console.log('o',testing());



export { ToDoItem, ToDosList }
