// Add your domain model below
Verbs: create, get, set, search, remove
nouns: todo item

Class ToDoList
Properties
-toDoArray(@ToDo)

Methods
-AddToDo(@string)
    no return
-GetAllItems()
    return toDoArray
-SetCompletedById(id@number)
    return success(@boolean)
-GetIncomplete()
    return incompleteArray(@todo)
-GetComplete()
    return incompleteArray(@todo)
-SearchById(id@number)
    return todo / error (@string)
-removeTodoById(id@number)
    return success(@boolean)


Class ToDo
Properties
-ID (@number)
-Text (@string)
-status (@boolean)

Methods
constructor (@string)
    return this
