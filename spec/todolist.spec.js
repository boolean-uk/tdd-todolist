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
    
    it('Should be an array with length 0 at first and 1 after adding a ToDoItem', () => {
        const toDos = new ToDosList()
        expect(toDos.toDos.length).toBe(0)

        const toDo = toDos.addToDo('test the code')
        expect(toDos.toDos.length).toBe(1)        
        expect(toDos.toDos[0].id).toBe(1)
        expect(toDos.toDos[0].taskDescr).toBe('test the code')
    })

    it('should return a list of added ToDos', () => {
        const toDos = new ToDosList()

        const toDo1 = toDos.addToDo('test the code')
        const toDo2 = toDos.addToDo('re-test the code')
        const toDo3 = toDos.addToDo('test the code again')

        expect(toDos.toDos.length).toBe(3)

        const getAllTd = toDos.getAllTodos()
        expect(getAllTd.length).toBe(3)
        expect(getAllTd[0].id).toBe(1)
        expect(getAllTd[0].taskDescr).toBe('test the code')
        expect(getAllTd[2].id).toBe(3)
        expect(getAllTd[2].taskDescr).toBe('test the code again')

    })
})
