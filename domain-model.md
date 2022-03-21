// Add your domain model below

## Objects | Properties | Messages | Output

item | ID@number  
item | text@String
item | status@String
item | isComplete@Boolean

---

todoList | item@Obj | create(text@String) | item@Obj
toDoList| Items@Array[item] | create(text@String) |
todoList | | getCompletes(items@Array) | items@array
todoList | | getInCompletes(items@Array) | items@array
todoList | | getList() | Items@Array
todoList | | searchById(id) | item@Obj || @String
todoList | | removeItem(id) | items@Array
todoList | | setItemComplete(id) | items@Obj
