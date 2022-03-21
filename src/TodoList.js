const TodoItem = require('./TodoItem')
class TodoList {

    /**
     * 
     * @param {Array} items already existing items
     */
    constructor(items = []) {
        this.items = items;
    }

    create = (text) => {
        let item = new TodoItem(this.items.length + 1, text)
        this.items.push(item)
        return item;
    }

    getAll = () => {
        return this.items
    }
}

module.exports = TodoList
