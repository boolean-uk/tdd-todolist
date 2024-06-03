const TodoItem = require('./todoitem')

class TodoList {
  constructor(...args) {
    this._list = args
  }

  add(item) {
    if (!(item instanceof TodoItem)) {
      return
    }

    this._list.push(item)
  }

  search({ id, text, status }) {
    const textFilter = (a, b) => a && new RegExp(a).test(b)
    return this._list.filter(
      (e) => e.ID === id || textFilter(text, e.text) || e.status === status
    )
  }

  update(id, { text, status }) {
    const itemIdx = this._list.findIndex((e) => e.ID === id)

    if (itemIdx === -1) {
      return
    }

    if (typeof text === 'string') this._list[itemIdx].text = text
    if (typeof status === 'boolean') this._list[itemIdx].status = status
  }

  remove(id) {
    const itemIdx = this._list.findIndex((e) => e.ID === id)
    if (itemIdx === -1) {
      return
    }

    this._list.splice(itemIdx, 1)
  }

  get length() {
    return this._list.length
  }
}

module.exports = TodoList
