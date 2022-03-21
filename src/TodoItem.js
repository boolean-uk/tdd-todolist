class TodoItem {
  constructor (id, text, status = 'incomplete') {
    this.id = id
    this.text = text
    this.status = status
  }
}

module.exports = TodoItem
