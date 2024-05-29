import { ToDoItem } from "../src/todolist.js";

describe('todo', () => {
    it('Should have an id, task description and isComplete must be false', () => {
        const todo = new ToDoItem(1, 'Test task')
        expect(todo.id).toBe(1)
        expect(todo.task).toBe('Test task')
        expect(todo.isComplete).toBe(false)
    })
})
