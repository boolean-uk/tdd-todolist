// Add your domain model below

| Methods          | Inputs              | Outputs                                         |
| ---------------- | ------------------- | ----------------------------------------------- |
| create()         | description @String | @Object(id, description, status: incomplete)    |
| showAll()        |                     | todoList @Array                                 |
| showIncomplete() |                     | todoList @Array                                 |
| setComplete()    | id @Number          | todoItem @Object                                |
| showComplete()   |                     | todoList @Array                                 |
| searchById()     | id @Number          | itemExists ? todoItem @Object : message @String |
| removeById()     | id @Number          | message @String                                 |
