function add (){
    return "cadastrando cliente";
}

function list(){

    return [
        {
        "id": "1",
        "nome": "pessoa1",
        }
]
}

function update() {
    return "editando o cliente"
}

function remove(){
    return "excluir cliente"
}

module.exports = {
    add,
    list,
    update,
    remove,
}