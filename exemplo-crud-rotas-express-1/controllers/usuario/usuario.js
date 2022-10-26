const fs = require('fs');

let usuarios = JSON.parse(fs.readFileSync('controllers/usuario/usuarios.db'));

function pegarUsuarioLogado(token) {
    let usuario = usuarios.filter(cadaUm => cadaUm.token === token);

    return usuario[0] || false; //se retornar false é pq nao tem usuario logado com esse token
}

//listar todos os usuarios GET /usuarios
function listar() {
    //como nao estamos usando banco de dados, fomos obrigados e coagidos a filtrar manualmente as informações
    resultado = usuarios.map(us => {
        return {
            id: us.id,
            nome: us.nome,
            email: us.email,
        }
    })

    return JSON.stringify(resultado);
}

//Buscar um usuario GET /usuarios/1
function buscar(idQueVeioNaURL) {
    //SELECT * FROM usuarios WHERE id=3
    let usuario = usuarios.filter(us => us.id == idQueVeioNaURL);

    return JSON.stringify(usuario[0]);
}

//Autenticar e gerar um token POST /login (email e senha)
function auth(emailReq, senhaReq) {
    // SELECT * FROM usuarios WHERE email = 'a@a.com'
    
    let usuario = usuarios.filter(us => us.email === emailReq);

    //se nao encontrou nenhum usuario, é pq nenhum usuario existe com esse email
    if (usuario.length === 0) {
        return "Usuario nao encontrado";
    }

    //testando se a senha confere
    if (usuario[0].senha !== senhaReq) {
        return "Senha incorreta";
    }

    //se chegou ate aqui, entao o email e a senha conferem

    //gerando um token pro usuario
    let token = "TK$@#" + usuario[0].senha + "rau_rau_rau";
    token = token.split("").reverse().join("");

    //salvando o token no db/file (como nao estamos usando banco ficou essa marmota)
    //UPDATE usuarios SET token='ABC123' WHERE id='3'
    usuarios = usuarios.map(us => {
        if (us.id == usuario[0].id) {
            us.token = token;
        }

        return us;
    })

    fs.writeFileSync('controllers/usuario/usuarios.db', JSON.stringify(usuarios));

    return token; 
}

module.exports = {
    listar,
    buscar,
    auth,
    pegarUsuarioLogado,
    
};