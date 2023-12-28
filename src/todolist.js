const todoList = [
    {
        id: 1,
        text: 'I will be going to the gym',
        status: 'incomplete'
    },
    {
        id: 2,
        text: 'I am going for a date',
        status: 'incomplete'
    }
];

class Todolist {
    constructor(todolist) {
        this.todolist = todolist;
    }

    create(newTodo) {
        const newId = this.todolist.length > 0 ? this.todolist[this.todolist.length - 1].id + 1 : 1;

        this.todolist.push({
            id: newId,
            text: newTodo,
            status: 'incomplete'
        });

        return this.todolist;
    }


    getAllTodo(){
        return this.todolist
    }

    setComplete(todoId){
        this.todolist.forEach(todo => {
            if(todo.id === todoId){
                todo.status =  "complete"
            }
         });

        return this.todolist
    }

    getIncompleteTodos(){
        return this.todolist.filter(todo => todo.status === 'incomplete')
         
    }

    getCompleteTodos(){
        return this.todolist.filter(todo => todo.status === 'complete')
         
    }

    searchTodoById(){
        const searchId = 4
        const seachById =  this.todolist.find(todo => todo.id === searchId)
        const result = seachById ? seachById : ` Todo with Id ${searchId} doesn't exist`

        return result
    }

    /*     removeById(){
        const idTobeRemoved = 2

        const removeTodowithId = this.todolist.filter(todo=> todo.id !== idTobeRemoved)
        return removeTodowithId
    } */

    removeById(){
        const idTobeRemoved = 2
    
        this.todolist = this.todolist.filter(todo => todo.id !== idTobeRemoved)
        return this.todolist
    }

}

const todoInstance = new Todolist(todoList)
const todo3 = todoInstance.create('i dey go home')
const todo4 = todoInstance.create('I am going for shopping')
const todo5 = todoInstance.create('I need to do my assignment')
/* console.log(todo5) */;

console.log("==============================")
const alltodolist = todoInstance.getAllTodo()
console.log(alltodolist)
console.log("==============================")

const completeTodo = todoInstance.setComplete(2)
console.log(completeTodo)
console.log("==============================")

const allIncompleteTodos = todoInstance.getIncompleteTodos()
console.log('this is allIncompleteTodos',allIncompleteTodos)
console.log("==============================")


const allCompleteTodos = todoInstance.getCompleteTodos()
console.log('this is allCompleteTodos',allCompleteTodos)
console.log("==============================")

const searchTodoWithId = todoInstance.searchTodoById()
console.log('this is the search by Id',searchTodoWithId)
console.log("==============================")

const removeTodo = todoInstance.removeById()
console.log( 'this is the remaining todo',removeTodo)




/* export default Todolist
 */

