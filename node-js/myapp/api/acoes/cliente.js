function listar () {
    return [
        {
            id: 1,
            nome: "Chiquim"
        },
        {
            id: 2,
            nome: "maria"
        }
    ];
}

function cadastrar () {
    return "Cadastrar Cliente";
}

function editar () {
    return "Editat Cliente";
}

function excluir () {
    return "Excluir Cliente"
}

module.exports = {
    listar,
    cadastrar,
    editar,
    excluir,
};