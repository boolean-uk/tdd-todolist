const createToDo = (description) => {
  if (!description) return false
  return { description, complete: false }
}

export { createToDo }
