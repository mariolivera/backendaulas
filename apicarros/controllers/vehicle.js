function add (){
    return "cadastrando veiculo";
}

function list(){
    return [
        {
        "id": "1",
        "nome": "Fiat Uno fire",
        }
]
}

function update() {
    return "editando o veiculo"
}

function remove(){
    return "excluir veiculo"
}

module.exports = {
    add,
    list,
    update,
    remove,
}