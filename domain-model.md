// Add your domain model below

| object    | properties                             |
| --------- | -------------------------------------- |
| Todo Item | ID, Text, Status (incomplete/complete) |

| method               | input                                                            | Output                                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------- |
| create()             | text for todo item (string)                                      | Todo Item (object)                                |
| getAll()             | list of todo items (array)                                       | Array of Todo items (array of Objects)            |
| setCompleteByID()    | todo ID (integer)                                                | Todo Item (object) with status of complete        |
| getIncomplete()      | list of todo items with incomplete and complete statuses (array) | Array of incomplete Todo items (array of objects) |
| getComplete()        | list of todo items with incomplete and complete statuses (array) | Array of complete Todo items (array of objects)   |
| todoItemSearchByID() | todo ID (integer)                                                | Todo Item (object) or error message (string)      |
| removeByID()         | todo ID (integer)                                                | New array of Todo items (array of objects)        |
