// Add your domain model below

| Methods          | Inputs              | Outputs                                      |
| ---------------- | ------------------- | -------------------------------------------- |
| create()         | description @String | @Object(id, description, status: incomplete) |
| showAll()        |                     | todoList @Array                              |
| showIncomplete() |                     | todoItem @Object                             |
| setComplete()    | id @Number          | todoItem @Object                             |
