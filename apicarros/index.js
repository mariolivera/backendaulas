const server = require('./server');

const host = 'localhost';
const port = '8000';

server.listen(port, host, () => {
    console.log(`API rodando no endereço ${host}:${port}`)
});