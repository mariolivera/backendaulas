const http = require('http');
const router = require('./router');

//função que é execultada a cada request
const eachRequest = (request,response) => {
    
    //definindo o tipo de resposta para o json
    response.setHeader('content-Type', 'application/Json');

    //pegando a URL acessada na request pelo cliente
    //let route = request.url;

    let {url, method} = request;

    let content = '';

    try {
         //definindo o conteudo da variavel // busca os dados do bando // try catch é orientado a objeto. 
        content = JSON.stringify(
        router (url, method)
    );

    }catch (error) { // se dé algum erro execulta esse aqui.
        response.whiteHead(error)
    }
    
    //respondendo para o http client.
    response.end(content);
};

// criando o servidor web Http
module.exports = http.createServer(eachRequest);