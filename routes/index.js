const express = require('express');
const routes = express.Router();

routes.use('/api', routes);
routes.use(express.static(__dirname + "/client"));


module.exports = routes;