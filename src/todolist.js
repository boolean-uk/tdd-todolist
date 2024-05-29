let nextid = 1

class Item {
  constructor(description) {
    this.description = description
    this.isCompleted = 'incomplete'
    this.id = nextid++
  }
}

module.exports = {
  Item
}
