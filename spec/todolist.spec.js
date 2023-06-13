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
        it("set todo complete by id", function() {
            const todoList = new Todolist()
            todoList.createTodoItem(1, "finish the exercise")
            expect(todoList.setComplete(1)).toEqual({id: 1, text: "finish the exercise", status: "complete"})
        }) 
    })
    describe("getIncomplete", () => {
        it("get all incomplete todos", () => {
            const todoList = new Todolist()
            todoList.createTodoItem(1, "finish the exercise")
            todoList.createTodoItem(2, "finish the exercise")
            expect(todoList.getIncomplete()).toEqual([{id: 1, text: "finish the exercise", status: "incomplete"}, {id: 2, text: "finish the exercise", status: "incomplete"}])
        })
    })
    describe("getComplete", () => {
        it("get all complete todos", () => {
            const todoList = new Todolist()
            todoList.createTodoItem(1, "finish the exercise")
            todoList.createTodoItem(2, "finish the exercise")
            todoList.setComplete(1)
            todoList.setComplete(2)
            expect(todoList.getComplete()).toEqual([{id: 1, text: "finish the exercise", status: "complete"}, {id: 2, text: "finish the exercise", status: "complete"}])
        })
    })
    describe('getTodoById', () => {
        it('get todo by id', () => {
            const todoList = new Todolist()
            todoList.createTodoItem(1, "finish the exercise")
            todoList.createTodoItem(2, "finish the exercise")
            expect(todoList.getTodoById(2)).toEqual({id: 2, text: "finish the exercise", status: "incomplete"})
        })
    })
   describe('removeTodo', () => {
    it('remove a specified todo by id', () => {
        const todoList = new Todolist()
        todoList.createTodoItem(1, "finish the exercise")
        expect(todoList.removeTodo(1)).toEqual([])
    })
   })
})