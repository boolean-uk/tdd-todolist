const todoApp = { 

    // if for keeping track of each object valule
    id : 0,

    todos: [],

    create : function (text) { 

        this.id++ // incrementing the value 

        return{
            id: this.id,
            text: text,
            status : "incomplete"
        }
    }

}

    showAll:

module.exports = todoApp