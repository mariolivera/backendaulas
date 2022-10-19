const produto = require('./acoes/produto');
const cliente = require('./acoes/cliente');

function router(pedido, funcaoParaQuandoTerminarDeExecutar) {
    if (pedido.url.indexOf('/clientes') >= 0) {
        if (pedido.method === 'GET') {
            funcaoParaQuandoTerminarDeExecutar(cliente.listar())
        }
        if (pedido.method === 'POST') {
            let dado = '';
            let novoCliente;
            pedido.on('data', parte => {
                dado += parte;
            })
            pedido.on('end', () => {
                novoCliente = JSON.parse(dado)
                cliente.cadastrar(novoCliente)
                funcaoParaQuandoTerminarDeExecutar(novoCliente.nome + ' adicionado')
            })
        }
        if (pedido.method === 'PUT') {
            funcaoParaQuandoTerminarDeExecutar(cliente.editar())
        }
        if (pedido.method === 'DELETE') {
            let id = pedido.url.split("/")[2]
            return cliente.excluir(id);
        }
    }

    if (pedido.url === '/produtos') {
        return produto.listar();
    }

    return "Error 404";
}

module.exports = router;