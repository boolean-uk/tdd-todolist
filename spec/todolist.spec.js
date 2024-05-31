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
        todoList.addTodoItem('1', 'TDD')
        const item2 = todoList.addTodoItem('2', 'Debug the mess')
        item2.setCompleted()
        const incompleteItems = todoList.getIncompleteItems()
        expect(incompleteItems.length).toBe(1)
        expect(incompleteItems[0].id).toBe('1')
    })

    it('should get only complete todo items', () => {
        const item1 = todoList.addTodoItem('1', 'TDD')
        item1.setCompleted()
        todoList.addTodoItem('2', 'Debug the mess')
        const completeItems = todoList.getCompleteItems()
        expect(completeItems.length).toBe(1)
        expect(completeItems[0].id).toBe('1')
    })

    it('should return a todo item by its ID', () => {
        const item = todoList.addTodoItem('1', 'Test task')
        const foundItem = todoList.getItemById('1')
        expect(foundItem).toEqual(item)
    })

    it('should return a message if a todo item does not exist', () => {
        const result = todoList.getItemById('999')
        expect(result).toEqual({ message: "Item not found" })
    })

    it('should remove a todo item by its ID', () => {
        todoList.addTodoItem('1', 'Test task')
        const result = todoList.removeItemById('1')
        expect(result).toEqual({ message: "Item removed successfully" })
        expect(todoList.getAllItems().length).toBe(0)
    })

    it('should return a message if trying to remove a non-existent todo item', () => {
        const result = todoList.removeItemById('999')
        expect(result).toEqual({ message: "Item not found" })
    })




})
