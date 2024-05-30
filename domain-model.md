# Domain Model

## Todo Item
- ID: Number
- Text: String
- Completed: Boolean

## Methods
- `create(text)`: Creates a new todo item with the given text, assigns a unique ID, and sets the completed value to "false".
- `getAll()`: Returns all todo items.
- `setComplete(id)`: Sets the completed value of the todo item with the given ID to "true".
- `getIncomplete()`: Returns only the todo items that are incomplete.
- `getComplete()`: Returns only the todo items that are complete.
- `searchById(id)`: Searches for a todo item by its ID and returns it, or a message saying it doesn’t exist.
- `removeById(id)`: Removes the todo item with the given ID.
