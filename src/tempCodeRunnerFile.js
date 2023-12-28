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
       return  this.todolist.filter(todoList => todoList.id === todoId ? todoList.status  : complete);
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

/* export default Todolist
 */

