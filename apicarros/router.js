const customer = require ('./controllers/customer')
const vehicle = require ('./controllers/vehicle')

const routes = {
    '/customer': {
        'GET': customer.list,
        'POST': customer.add,
        'PUT' : customer.update,
        'DELETE': customer.remove,
    },
    '/vehicle' : {
        'GET': vehicle.list,
        'POST': vehicle.add,
        'PUT' : vehicle.update,
        'DELETE': vehicle.remove,
    },
}

function router (url, method) {
    // a url represanta qual controller a gente vai precisar. 'EX : veiculo, cliente etc...'
    // o method representa qual função a gente vai usar.  'Ex:GET,POST,PUT,DELETE'
    if(!routes[url]){
        throw "404"; //gerando o erro costomizado de proposito
    }

    if(!routes[url][method]){
        throw "405";
    }
    return routes[url][method]();
}

module.exports = router;