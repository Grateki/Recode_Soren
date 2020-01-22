const { Router } = require('express');
const routes = Router();
const connection = require('./config/dbConfig')



// Create, Read, Update Delete


// Insert data into database
routes.post('/users', (req, res) => {
    connection.query(`select email from cadastro where email = '${req.body.email}';`, (err, dados) => {
        console.log(`err: ${err}, dados: ${dados}`)

        if (dados == '')
        {
            connection.query(`insert into cadastro (nome_completo, email, senha)
            values ("${req.body.nome}", "${req.body.email}", "${req.body.password}")`)
            res.send('<h1 style="color: red">Cadastrado com sucesso</h1>')
        } 
        else 
        { 
            res.redirect('/signup') 
        }
    });
});


// delete data from database
routes.delete('/users', (req, res) => {
    connection.query(`delete from cadastro where email = "${req.body.email}"`, (err) => {
        
        if (req.body.email == true)
        {
            res.json({erro: "user deleted"});
        } 
        
        else 
        { 
            res.send("user doesn't exists"); 
        };

    });
});

module.exports = routes;