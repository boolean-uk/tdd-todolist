import Todolist from '../src/todolist.js'

describe("to do list", () => {

    describe("getAll",() => { 
        it("can get all todo items", function() {
            const todoList = new Todolist() 
            todoList.createTodoItem(1, "finish the exercise")
            expect(todoList.getAll()).toEqual([{id: 1, text: "finish the exercise", status: "incomplete"}])
        })
     })  
    
    describe("createTodoItem", function (){
        it("create todo item", function() {
            const todoList = new Todolist([])
            expect(todoList.createTodoItem(1, "finish the exercise")).toEqual({id: 1, text: "finish the exercise", status: "incomplete"})
        })
    })

    describe("setComplete", function (){
        fit("set todo complete by id", function() {
            const todoList = new Todolist([])
            expect(todoList.setComplete(1)).toEqual({id: 1, text: "finish the exercise", status: "complete"})
        }) 
    })

  
   
})