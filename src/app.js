const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes");
let port = 3008;



app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(routes);



// configurei a query para usar a database cadastro

app.listen(port, () => {
    console.log(`API rodando na porta ${port}/localhost:${port}`);
});

module.exports = app;
