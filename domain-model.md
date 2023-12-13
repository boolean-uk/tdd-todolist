// Add your domain model below

# Template

USER: Can create a new todo.
METHOD: createToDo
INPUT: description
OUTPUT: @Object: {
  description: @string,
  complete: @boolean
}