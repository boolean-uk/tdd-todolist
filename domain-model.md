object          |   properties
----------------------------------------------------------------------
todo item       |   id - number, description - string, status - string
todo list       |   array


method              |         input                             |       output 
--------------------------------------------------------------------------------------                 
create()            |   description - string                    |   todo item - object
setCompleteById()   |   id - number                             |   todo item - object
getComplete()       |   all todo items - array of objects       |   complete items - array of objects
getIncomplete()     |   all todo items - array of objects       |   incomplete items - array of objects
searchById()        |   id - number                             |   todo item - object
removeById()        |   id - number                             |   the todo items which are not deleted - array