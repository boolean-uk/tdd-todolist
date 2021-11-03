const { verify } = require("crypto")
const todoApp = require("../src/todoApp")

describe("Todo App",() => {


    // manual teardown
    beforeEach(() => { 
        todoApp.id = 0 // reseting the id for validatin the
    })                 // creates many todos SPEC 

    it("creates a to do item", () => { 

        //setup
        const expected = { 
            id: 1, text: "make pizza", status: "incomplete"
        }

        //execute
        expect(todoApp.create("make pizza")).toEqual(expected)


        //verify

    } )


    it("creates many todo items", () => { 

        // setup
        const item1 = todoApp.create("make bread")
        const item2 = todoApp.create("make time")

        //execute 
        expect(item1.id).toEqual(1)
        expect(item2.id).toEqual(2)

        // verify
    })

})