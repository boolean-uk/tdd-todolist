// Add your domain model below

In the given To-Do List System, we have a collection of tasks represented as to-do items. Each to-do item is an object with the following properties:

id: a unique identifier (number) for the to-do item.
description: a brief description (string) of the task.
status: the status (string) of the task, either 'incomplete' or 'complete'.
Functions:

addTodo(id, description, status):

Inputs:
id (number): a unique identifier for the to-do item.
description (string): a brief description of the task.
status (string): the initial status of the task, either 'incomplete' or 'complete'.
Action: Creates a new to-do item with the provided id, description, and status. Adds the created to-do item to the To-Do List.
listAllTodos(todoList):

Input:
todoList (array): the collection of to-do items.
Output:
If the to-do list is empty, returns the message "No todos available."
If there are to-do items, returns the array of to-do items.
markComplete(id, todoList):

Inputs:
id (number): the unique identifier of the to-do item.
todoList (array): the collection of to-do items.
Action: Finds the to-do item in the list with the matching id and sets its status to 'complete'.
getIncompleteTodos(todoList):

Input:
todoList (array): the collection of to-do items.
Output: Returns an array containing only the to-do items with a status of 'incomplete'.
getCompleteTodos(todoList):

Input:
todoList (array): the collection of to-do items.
Output: Returns an array containing only the to-do items with a status of 'complete'.
findTodoById(id, todoList):

Inputs:
id (number): the unique identifier of the to-do item.
todoList (array): the collection of to-do items.
Output:
If no to-do item matches the id, returns the message "No ToDo exists matching this ID."
If a matching to-do item is found, returns the to-do item.
removeTodoById(id, todoList):

Inputs:
id (number): the unique identifier of the to-do item.
todoList (array): the collection of to-do items.
Action: Finds the to-do item in the list with the matching id and removes it from the To-Do List.
