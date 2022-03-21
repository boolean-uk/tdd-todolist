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

    getItemById = (id) => {
        return  this.items.filter(item => item.id === id)[0];
    }

    setComplete = (id) => {
        const changingItem = this.getItemById(id);
        if(changingItem) changingItem.status = 'completed'
        return changingItem;
    }

    getIncomplete = () => {
        return this.items.filter(item => item.status === 'incomplete')
    }

    getCompleted = () => {
        return this.items.filter(item => item.status === 'completed')
    }


}

module.exports = TodoList
