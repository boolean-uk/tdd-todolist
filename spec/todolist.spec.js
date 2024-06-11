const { expect } = require('chai');
const TodoList = require('../src/todolist');

describe('TodoList', () => {
    let todoList;

    beforeEach(() => {
        todoList = new TodoList();
    });

    it('should create a todo item with an ID, text description, and incomplete status', () => {
        const todo = todoList.create('Do the laundry');
        expect(todo).to.deep.equal({ id: 1, text: 'Do the laundry', status: 'incomplete' });
    });

    it('should return all todo items', () => {
        todoList.create('Do the laundry');
        todoList.create('Make the bed');
        const todos = todoList.getAll();
        expect(todos).to.deep.equal([
            { id: 1, text: 'Do the laundry', status: 'incomplete' },
            { id: 2, text: 'Make the bed', status: 'incomplete' }
        ]);
    });

    it('should set a todo item as complete by its ID', () => {
        todoList.create('Do the laundry');
        const todo = todoList.setComplete(1);
        expect(todo).to.deep.equal({ id: 1, text: 'Do the laundry', status: 'complete' });
    });

    it('should return a message if the todo item does not exist', () => {
        const result = todoList.setComplete(99);
        expect(result).to.equal('Todo item not found');
    });

    it('should return only incomplete todo items', () => {
        todoList.create('Do the laundry');
        todoList.create('Make the bed');
        todoList.setComplete(1);
        const incompleteTodos = todoList.getIncomplete();
        expect(incompleteTodos).to.deep.equal([
            { id: 2, text: 'Make the bed', status: 'incomplete' }
        ]);
    });

    it('should return only complete todo items', () => {
        todoList.create('Do the laundry');
        todoList.create('Make the bed');
        todoList.setComplete(1);
        const completeTodos = todoList.getComplete();
        expect(completeTodos).to.deep.equal([
            { id: 1, text: 'Do the laundry', status: 'complete' }
        ]);
    });

    it('should return a todo item by its ID', () => {
        todoList.create('Do the laundry');
        const todo = todoList.searchById(1);
        expect(todo).to.deep.equal({ id: 1, text: 'Do the laundry', status: 'incomplete' });
    });

    it('should return a message if the todo item does not exist', () => {
        const result = todoList.searchById(99);
        expect(result).to.equal('Todo item not found');
    });

    it('should remove a todo item by its ID', () => {
        todoList.create('Do the laundry');
        todoList.create('Make the bed');
        todoList.removeById(1);
        const todos = todoList.getAll();
        expect(todos).to.deep.equal([
            { id: 2, text: 'Make the bed', status: 'incomplete' }
        ]);
    });

    it('should return a message if the todo item does not exist when trying to remove it', () => {
        const result = todoList.removeById(99);
        expect(result).to.equal('Todo item not found');
    });
});
