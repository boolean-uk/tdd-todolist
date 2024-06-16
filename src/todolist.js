

function create(text) {
  const todo = {
    id: nextId++,
    text,
    status: 'incomplete',
  };
  return todo;
}

module.exports = { create };

// todolist.js
let todos = [];
let nextId = 1;

function create(text) {
  // ... (previous implementation)
  todos.push(todo);
  return todo;
}

function getAll() {
  return todos;
}

function setComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.status = 'complete';
    return todo;
  }
  return 'Todo item not found';
}


module.exports = { create, getAll, setComplete, getIncomplete, getComplete, getById, remove };