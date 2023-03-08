const toDoList = require('../src/todolist.js');

describe("Basket", () => {
    let todoList

    beforeEach(() => {
        todoList = new toDoList()
    })

    it("create an item", () => {
        //set up
        const expected = { id: 1, text: "Do the laundry", status: "incomplete" }
        //execute
        const result = todoList.createItem("Do the laundry")
        //verify
        expect(result).toEqual(expected)
    })

    it("show all items", () => {
        //set up
        const expected = [
            { id: 1, text: "Do the laundry", status: "incomplete" },
            { id: 2, text: "Make the bed", status: "incomplete" },
        ]
        //execute
        todoList.createItem("Do the laundry")
        todoList.createItem("Make the bed")
        //verify
        expect(todoList.getItems()).toEqual(expected)
    })

    it("set completed ", () => {
        //set up
        const item = todoList.createItem("Do the laundry")
        const expected = { id: 1, text: "Do the laundry", status: "complete" }
        //execute
        const result = todoList.setComplete(item.id)
        //verify
        expect(result).toEqual(expected)
    })

    it("show complete items", () => {
        //set up
        const item1 = todoList.createItem("Do the laundry")
        const item2 = todoList.createItem("Make the bed")
        todoList.setComplete(item1.id)

        const expected = [
            { id: 1, text: "Do the laundry", status: "complete" }
        ]
        //execute
        const result = todoList.getByStatus("complete")
        //verify
        expect(result).toEqual(expected)
    })

    it("find items by Id", () => {
        //set up
        const item1 = todoList.createItem("Do the laundry")

        const expected = { id: 1, text: "Do the laundry", status: "incomplete" }

        //execute
        const result = todoList.findBy(item1.id)
        //verify
        expect(result).toEqual(expected)
    })

    it("throw error if item does not exist", () => {
        // setup
        todoList.createItem('Do the laundry')
        todoList.createItem('Make the bed')
        // execute
        const result = todoList.findBy(3)
        // verify
        expect(result).toEqual('Item not found')
    })


    it("delete an item", () => {
        // setup
        todoList.createItem('Do the laundry')
        todoList.createItem('Make the bed')
        todoList.deleteBy(1)
        // execute
        const expected = [{id:2, text:"Make the bed", status: "incomplete"}]
        const result = todoList.getItems()
        // verify
        expect(result).toEqual(expected)
    })
})