const produtos = [
    {
        "id": "1",
        "nome": "produto 1"
    },
    {
        "id": "2",
        "nome": "produto 2"
    }
]

function listar(){
    return JSON.stringify(produtos);
}

function criar(produto){
    produtos.push(produto) 
    return JSON.stringify(produtos)
}

function atualizar(){
    return "atualizar Produto"
}

function deletar(produto_id){
    let filtrados =produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(filtrados)
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar,
}
