// Add your domain model below

| Methods          | Inputs                | Data                                                                               | Scenario                           | Outputs                                      |
| ---------------- | --------------------- | ---------------------------------------------------------------------------------- | ---------------------------------- | -------------------------------------------- |
| create()         | description@String    | todoItem(@Object), properties: id(@Number), description(@String), status(@String)  | If todoItem has description        | @Object(id, description, status: incomplete) |
|                  |                       |                                                                                    | If todoItem don't have description | null or @String                              |
| showAll()        | todoList(@todoItem[]) | todoItem(@Object), properties: id(@Number), description(@String), status(@Boolean) | If there are items                 | @Object[]                                    |
|                  |                       |                                                                                    | If there is no items               | @String                                      |
| showIncomplete() | status                | todoItem(@Object), properties: id(@Number), description(@String), status(@Boolean) | If there are items                 | @Object[]                                    |
|                  |                       |                                                                                    | If there is no items               | @String                                      |
| showComplete()   | status                | todoItem(@Object), properties: id(@Number), description(@String), status(@Boolean) | If there are items                 | @Object[]                                    |
|                  |                       |                                                                                    | If there is no items               | @String                                      |
| searchTodo()     | id                    | todoItem(@Object), properties: id(@Number), description(@String), status(@Boolean) | If there are items                 | @Object[]                                    |
|                  |                       |                                                                                    | If there is no items               | @String                                      |
| setComplete()    | id                    | todoItem(@Object), properties: id(@Number), description(@String), status(@Boolean) | If there are items                 | @Object                                      |
|                  |                       |                                                                                    | If there is no items               | @String                                      |
| removeTodo()     | id                    | todoItem(@Object), properties: id(@Number), description(@String), status(@Boolean) | If there are items                 | @String                                      |
|                  |                       |                                                                                    | If there is no items               | @String                                      |
