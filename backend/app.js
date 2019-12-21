const server = require("./server");

server.get('/signup', (request, response) => {
    response.json({message: "página de cadastro"});
})

server.get('/login', (request, response) => {
    response.json({message: "página de login"});
})

server.get('/eventos', (request, response) => {
    response.json({função: "retornar a pagina de eventos"});

});

var requestTime = (request, response, next) => {
    request.requestTime = Date.now();
    next();
}

server.use(requestTime);


server.get('/', (request, response) => {
    var responseText = 'hello, world';
    responseText += ' tempo ' + request.requestTime;
    response.send(responseText);
})
