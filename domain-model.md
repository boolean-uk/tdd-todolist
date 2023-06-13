// Add your domain model below
<!-- Create a todo item -->
<!-- Method -->
createToDoItem (id, string)

<!-- Input -->
id(number), string(string)

<!-- Scenario -->
toDoItem will be present in array

<!-- Output -->
true

<!-- Get all todo items -->
<!-- Method -->
getAll(toDos[])

<!-- Input -->
createToDoItem(object)

<!-- Scenario -->
if toDoItems are displayed 

<!-- Output -->
true

<!-- Set a todo completed by its ID -->
<!-- Method -->
setComplete(id)

<!-- Input -->
id(number)

<!-- Scenario -->
toDo property status will change from incomplete to complete

<!-- Output -->
toDo status complete

<!-- Get incomplete todo items -->
<!-- Method -->
getIncomplete()

<!-- Input -->
todoList.getIncomplete()

<!-- Scenario -->
get all incomplete todo items

<!-- Output -->
array

<!-- Get completed todo items -->
<!-- Method -->
getComplete()

<!-- Input -->
todoList.getComplete()

<!-- Scenario -->
get all complete todo items

<!-- Output -->
array

<!-- Search todo by id -->
<!-- Method -->
getById()

<!-- Input -->
todoList.getById()

<!-- Scenario -->
get and return todo by its id

<!-- Output -->
Object

<!-- Remove todo item by id -->
<!-- Method -->
removeTodo()

<!-- Input -->
todoList.removeTodo()

<!-- Scenario -->
Remove the todo item from the array

<!-- Output -->
true