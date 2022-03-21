// class TodoList {

//     todo = []

//     completedTodo = {
//         id: this.todo.length + 1,
//         text: text,
//         status: "completed"
//     }
//     incompleteTodo = {
//         id: this.todo.length + 1,
//         text: text,
//         status: "incomplete"
//     }

//     create(text) {
//         const todoToCreate = {
//             id: this.todo.length + 1,
//             text: text,
//             status: "incomplete" || "completed"
//         };
        
//         // this.todo.push(todoToCreate)
//         if (todoToCreate.status === completed) {
//             return this.completedTodo && this.todo.push(todoToCreate)
//         } else if (todoToCreate.status === incomplete) {
//             return this.incompleteTodo && this.todo.push(todoToCreate)
//         }
//          this.todo.push(todoToCreate)

//         return todoToCreate
//     }
// }
class TodoList {
    todo = []
    idCount = 1
    create(text) {
        const todoToCreate = {
            id: this.idCount,
            text: text,
            status: "incomplete"
        };
        
        
        this.todo.push(todoToCreate);
        this.idCount += 1;
        return todoToCreate
    }
    
    TodoResult() {
        return this.todo;
    }
    complete(idx) {
        this.todo[idx].status = "complete";
        return this.todo;
    }
    incomplete() {
        return this.todo.filter((todoToCreate) => todoToCreate.status === "incomplete");
    }
    deleteTodo(idx) {
        return this.todo.filter((todoToCreate) => todoToCreate.id != idx);
      
    }

}

module.exports = TodoList
