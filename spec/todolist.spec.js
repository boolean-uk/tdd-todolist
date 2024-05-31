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
        expect(item.description).toBe('TDD')
        expect(item.isCompleted).toBe(false)
        expect(todoList.getAllItems()).toContain(item)
    })

    it('should get all todo items', () => {
        todoList.addTodoItem('1', 'TDD')
        todoList.addTodoItem('2', 'Debug this mess')
        const allItems = todoList.getAllItems()
        expect(allItems.length).toBe(1)
    })



})
