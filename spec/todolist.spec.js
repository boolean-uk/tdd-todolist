import { ToDoItem, ToDosList } from "../src/todolist.js";

describe('todo', () => {
    it('Should have a task description, isComplete must be fals and must have an id of 0 for the 1st task and 1 for the 2nd', () => {
        const todo1 = new ToDoItem('Test_task_1')
        expect(todo1.id).toBe(0)
        expect(todo1.taskDescr).toBe('Test_task_1')
        expect(todo1.isComplete).toBe(false)

        const todo2 = new ToDoItem('Test_task_2')
        expect(todo2.id).toBe(1)
        expect(todo2.taskDescr).toBe('Test_task_2')
        expect(todo2.isComplete).toBe(false)        
    })
})

describe('To Dos list', () => {
    it('Should be an array with 0 length', () => {
        const toDos1 = new ToDosList()
        expect(toDos1.toDos.length).toBe(0)
    })

})
