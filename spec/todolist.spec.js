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
        expect(allItems.length).toBe(2)
    })

    it('should get only incomplete todo items', () => {
        todoList.addTodoItem('1', 'Test task 1')
        const item2 = todoList.addTodoItem('2', 'Test task 2')
        item2.setCompleted()
        const incompleteItems = todoList.getIncompleteItems()
        expect(incompleteItems.length).toBe(1)
        expect(incompleteItems[0].id).toBe('0')
    })



})
