## Requirement

- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID

## Noun & Verb

Noun: todo item, todo items
Verb: Get, set, search and return, remove

## Domain Model

| Object        | Properties / Methods / Messages                            | Output                                     |
| ------------- | ---------------------------------------------------------- | ------------------------------------------ |
| todo          | todo @Object {id: @Number, text: @String, status: @String} | todo @Object                               |
| todoList      | create(text @String)                                       | todoList @Array[@todo]                     |
| getIncomplete | getIncomplete(@todoList)                                   | todoList @Array[@todo]                     |
| getComplete   | getComplete(@todoList)                                     | todoList @Array[@todo]                     |
| searchTodo    | searchTodo(id @number)                                     | todo @Object or @String "it doesn’t exist" |
| removeTodo    | removeTodo(id @number)                                     | todoList @Array[@todo]                     |

todo => add todo with create(text @String) => added to todoList @Array[@todo]
filter through todoList @Array[@todo] with getIncomplete(todoList @Array[@todo]) => return todoList @Array[@todo] with status:"incomplete"
filter through todoList @Array[@todo] with getIncomplete(todoList @Array[@todo]) => return todoList @Array[@todo] with status:"complete"
filter thorugh todoList @Array[@todo] with searchTodo(id @number) => return todo @Object that matches the id @number. If non-existent, return "it doesn’t exist"
filter through todoList @Array[@todo] with removeTodo(id @number) => return todoList @Array[@todo] without the matching id @number
