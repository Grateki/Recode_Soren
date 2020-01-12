const express = require('express');
const routes = require('./routes');
const mysql = require('mysql');

// Aqui estou chamando o banco de dados
const connection = require('./database/db')


const app = express();
app.get('/', (req, res) => {
    res.send([{nome: "ola"}]);
});

// configurei a query para usar a database cadastro
connection.query('use cadastro;');
 
/* 
connection.query('select * from pessoas', (error, data) => {
    console.log({erro: error, dados: data})
}); */

let port = 3010;
app.listen(port, () => {
    console.log(`API rodando na porta ${port} ou localhost:${port}`)
});