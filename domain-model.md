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

| Object   | Properties / Methods / Messages                            |
| -------- | ---------------------------------------------------------- |
| todo     | todo @Object {id: @Number, text: @String, status: @String} |
| todoList | create(text @String)                                       |
