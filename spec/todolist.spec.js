import { TodoList, TodoItem} from "../src/todolist.js"

describe('TodoList', () => {
    let todoList

    beforeEach(() => {
        todoList = new TodoList()
    })

    it('should add a new todo item', () => {
        const item = todoList.addTodoItem('1', 'TDD')
        expect(item).toBeInstanceOf(TodoItem)
        expect(item.id).toBe('1')
        expect(item.description).toBe('Test')
        expect(item.isCompleted).toBe(false)
        expect(todoList.getAllItems()).toContain(item)
    })

})
