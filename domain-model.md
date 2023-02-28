toDoList array of toDoItem js object

toDoItem js object
PROPERTIES
- id: number
- description: string
- status: string

createToDo(id, description, status) ->
INPUTS:
- id: number
- description: string
- status: string
makes a js object with keys and values matching above and pushes the object to the toDoList array.

getAll(toDoList) ->
returns "nothing left to do" if array is empty
returns a toDolist array if toDOlist items are present.

setStatus(number) ->
finds the object in the the array with the id matching the number parameter
sets toDoItem.status to completed
