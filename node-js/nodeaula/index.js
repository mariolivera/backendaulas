const http = require('http')
let endereco = 'localhost'
let porta = 8000
let respostaJson = [{"nome": "mario", "idade":"33", "id": "01"},{"nome": "maria", "idade":"43", "id": "02"},{"nome": "marco", "idade":"23", "id": "03"}]
let servidorHttp = http.createServer(function (requisicao, resposta) {
    if (requisicao.url.indexOf('/alunos') >= 0) {
        if (requisicao.method === 'GET') {
            resposta.writeHead(200)
            resposta.end(JSON.stringify(respostaJson))
        } else if (requisicao.method === 'POST') {
            let dado = '';
            requisicao.on('data', parte => {
                dado += parte;
            })
            requisicao.on('end', () => {
                let alunoASerAdicionado = JSON.parse(dado)
                respostaJson.push(alunoASerAdicionado)
                resposta.writeHead(200)
                resposta.end(JSON.stringify(alunoASerAdicionado))
            })
        } else {
            resposta.writeHead(404)
            resposta.end('')
        }
    } else {
        resposta.writeHead(404)
        resposta.end('')
    }
});
servidorHttp.listen(porta, endereco, () => {
    console.log('iniciei a escuta')
})