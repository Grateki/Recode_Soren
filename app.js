const express = require('express');
const routes = require('./rotas')

const app = express();

app.get('/', (req, res) => {
    res.send('Funcionando...')
});

app.use('/api', routes);
app.use(express.static(__dirname + "/client"))


let port = 3004;
app.listen(port, () => {
    console.log(`API rodando na porta ${port} ou localhost:${port}`)
});