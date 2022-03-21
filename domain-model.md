
Object | Fields | Methods
--- | --- | --- 
TodoList | items [@TodoItem] | create(text @String) > @TodoItem <br> getAll() > [@TodoItem] <br> getIncomplete() > [@TodoItem] <br> getCompleted() > [@TodoItem] <br> setCompleted(id @Number) <br> getItemById(id @Number) > @TodoItem  <br> getItemsByDate() > [@TodoItem]<br> remove(id @Number) > @Boolean |
TodoItem | id @Number <br> text @String <br> status @String | ---