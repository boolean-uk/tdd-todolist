const { create } = require('../src/todolist');

describe('Todo App', () => {
  test('should create a todo item with an ID, text description, and incomplete status', () => {
    const todo = create('Do the laundry');
    expect(todo).toEqual({ id: 1, text: 'Do the laundry', status: 'incomplete' });
  });
});


const { create, getAll, setComplete, getIncomplete, getComplete, getById, remove } = require('../src/todolist');

describe('Todo App', () => {
  // ... (previous test)

  test('should get all todo items', () => {
    const todos = getAll();
    expect(todos).toEqual([
      { id: 1, text: 'Do the laundry', status: 'incomplete' },
    ]);
  });

  test('should set a todo as complete by its ID', () => {
    const todo = setComplete(1);
    expect(todo).toEqual({ id: 1, text: 'Do the laundry', status: 'complete' });
  });

  
});