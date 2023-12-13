const init = () => {
  const button = document.getElementById('add')
  const input = document.querySelector('input')

  const reaction = () => {
    console.log(input.value)
    console.log('click!')
  }

  button.addEventListener('click', reaction())
}

const loadList = () => {
  const ul = document.querySelector('ul#todos')
  const entries = document.querySelectorAll('ul#todos li')

  entries.forEach((entry) => entry.remove())

  const todos = myList.getAll()

  todos.forEach((todo) => {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    if (todo.complete) {
      checkbox.checked = true
    }

    const li = document.createElement('li')
    li.innerText = todo.description
    li.appendChild(checkbox)

    if (todo.complete) {
      li.setAttribute('class', 'strikethrough')
    }

    ul.appendChild(li)
  })
}

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
    loadList()
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

const myList = new TodoList('My List')

myList.create('Test entry')
myList.create("Test entry 2 but it's done")
myList.setComplete(2)

init()
loadList()

module.exports = { TodoList }
