const router = require('express').Router();
const controller = require('./carrinho');

router.get('/carrinho', (req, res) => {
    let token = req.headers.authorization;

    res.send(
        controller.buscarCarrinhoDoUsuario(token)
    )
})

router.post('/carrinho', (req, res) => {
    let token = req.headers.authorization;

    res.send (
        controller.addAoCarrinho(token, req.body)
    )
})

router.delete('/carrinho/:id', (req, res) => {
    let token = req.headers.authorization;
    res.send (
        controller.excluirItemDoCarrinho(token, req.params.id)
    )
        
})

module.exports = router;