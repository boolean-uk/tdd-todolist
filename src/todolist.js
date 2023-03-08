class toDoList {
    constructor() {
        this.id = 0
        this.items = []
    }

    createItem(title) {
        this.id++
        const item = { id: this.id, text: title, status: 'incomplete' }
        this.items.push(item)
        return item
    }

    getItems() {
        return this.items
    }

    setComplete(id) {
        const item = this.findBy(id)
        item.status = 'complete'
        return item
    }
    getByStatus(status) {
        return this.items.filter(item => item.status === status)
    }

    findBy(id) {
        if (this.items[id - 1]) {
            return this.items[id - 1]
          }
          return 'Item not found'
        }
    

    deleteBy(id) {
        const item = this.findBy(id)
        const index = this.items.indexOf(item)
        return this.items.splice(index, 1)[0]
    }
}

module.exports = toDoList


