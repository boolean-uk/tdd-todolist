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

    setComplete = (id) => {
        const changingItem = this.items.filter(item => item.id === id)[0]
        if(changingItem) changingItem.status = 'complete'
        return changingItem;
    }
}

module.exports = TodoList
