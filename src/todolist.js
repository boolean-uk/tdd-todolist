const toDos = []
const item = {id: toDos.length +1, 
    completed: false,
    text: ""
}

function addToDoList(item){
    toDos.push(item)
    return toDos
}

module.exports = {
    addToDoList
}
console.log(addToDoList("clean"))