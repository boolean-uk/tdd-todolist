const todoApp = { 

    // if for keeping track of each object valule
    id : 0,

    create : function (text) { 

        this.id++ // incrementing the value 

        return{
            id: this.id,
            text: text,
            status : "incomplete"
        }
    }

}


module.exports = todoApp