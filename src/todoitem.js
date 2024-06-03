class TodoItem {
    constructor(text) {
      this._id = Math.random() * 10000 + ''
      this.status = false
      this.text = text
    }
  
    get ID() {
      return this._id
    }
  }
  
  module.exports = TodoItem
  