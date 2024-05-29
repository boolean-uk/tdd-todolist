import { ToDoItem, ToDosList } from "../src/todolist.js";

describe('todo', () => {
    it('Should have a task description, isComplete must be false and must have an id of 0 for the 1st task and 1 for the 2nd', () => {
        const todo1 = new ToDoItem(1,'Test_task_1')
        expect(todo1.id).toBe(1)
        expect(todo1.taskDescr).toBe('Test_task_1')
        expect(todo1.isComplete).toBe(false)

        const todo2 = new ToDoItem(2,'Test_task_2')
        expect(todo2.id).toBe(2)
        expect(todo2.taskDescr).toBe('Test_task_2')
        expect(todo2.isComplete).toBe(false)        
    })
})

describe('To Dos list', () => {
    it('Should be an array with 0 length', () => {
        const toDos = new ToDosList()
        expect(toDos.toDos.length).toBe(0)
    })
    
//     it('Should be an array with 1 length after adding a ToDoItem', () => {
//         const toDos1 = new ToDosList()
//         expect(toDos1.toDos.length).toBe(0)

//         const toDo = toDos1.addToDo('test the code')
//         expect(toDos1.toDos.length).toBe(1)        
//         expect(toDo.id).toBe(0)
//         // expect(toDo.taskDescr).toBe('test the code')
//     })
})
