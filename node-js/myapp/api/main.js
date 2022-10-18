const http = require ('http');  // isso serve de servidor para o cliente
const router = require ('./router');


const host = 'localhost';
const port = '8000';

//console.log(produto.listar());
//console.log(cliente.listar());

//função que vai ser execultado sempre que houver alguma requisiçao por parte do cliente
function execucao (pedido,resposta) {
    // definindo o tipo de conteudo da resposta par json.
    resposta.setHeader('Content-Type', 'appication/Json');

    //pedido ao router quai o conteudo da url acessada
    let conteudo = router(pedido.url);
    //enviado o conteudo que tinha no router como resposta para o cliente
    resposta.end(JSON.stringify(conteudo));
}
// criando o servido e definido a funcao que ficara sendo execultado
const server = http.createServer(execucao);

server.listen(port, host, () => {
    console.log(`Servidor rodado no endereço http:${host}:${port}`)
});