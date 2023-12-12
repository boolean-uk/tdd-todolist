class TodoList {
  constructor(title) {
    this.title = title || 'untitled'
    this.items = []
  }

  getAll() {
    return this.items
  }

  create(description) {
    if (!description) return false
    const newItem = { id: this.items.length + 1, description, complete: false }
    this.items.push(newItem)
    return newItem
  }

  setComplete(id) {
    const itemExists = !!this.items.find((item) => item.id === id)
    if (!itemExists) return 'Todo item not found'
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: true
        }
      } else {
        return item
      }
    })
    return this.items.find((item) => item.id === id)
  }
}

const myList = new TodoList("My List")

myList.create("Test entry")
const handleSubmit = (event) => {
  console.log("hello")
}

const loadList = () => {
  const ul = document.querySelector("ul#todos")
  const todos = myList.getAll()

  todos.forEach((todo) => {
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")

    const li = document.createElement("li")
    li.innerText = todo.description
    li.appendChild(checkbox)
    ul.appendChild(li)
  })
}

loadList()

module.exports = { TodoList }
