let listaDeClientes = [
    {
        id: "1",
        nome: "Chiquim"
    },
    {
        id: "3",
        nome: "José"
    },
    {
        id: "2",
        nome: "Maria"
    },
]


function listar() {
    return listaDeClientes;
}

function cadastrar(novoCliente) {
    listaDeClientes.push(novoCliente)
    return "Cadastrar Cliente";
}

function editar() {
    return "Editar Cliente";
}

function excluir(id) {
    console.log('remover id', id)
    let cliente = listaDeClientes.find((cliente)=> cliente.id === id)
    if(!cliente){
        return 'cliente n existe'
    }
    let nome = cliente.nome
    listaDeClientes = listaDeClientes.filter((cliente) => cliente.id != id)
    return nome + ' foi deletado'
}

module.exports = {
    // listar: listar,
    listar,
    cadastrar,
    excluir,
    editar,
};