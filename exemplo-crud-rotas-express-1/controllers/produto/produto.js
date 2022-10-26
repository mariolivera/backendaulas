
let fs = require('fs');

function listar() {
    return JSON.parse(fs.readFileSync('controllers/produto/produtos.chuchu').toString());
}

function criar(produto) {
    let produtos = listar()
    produtos.push(produto);
    fs.writeFileSync('controllers/produto/produtos.chuchu', JSON.stringify(produtos))
    return listar()
}

function atualizar() {
    return "Atualizar produto"
}

function deletar(produto_id) {
    produtos = produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(produtos)
}

module.exports = {
    listar: listar,
    criar: criar,
    atualizar: atualizar,
    deletar: deletar
}