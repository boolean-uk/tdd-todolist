class TodoItem {
  constructor (id, text, status = 'incomplete', date = new Date()) {
    this.id = id
    this.text = text
    this.status = status
    this.date = date
  }
}

module.exports = TodoItem
