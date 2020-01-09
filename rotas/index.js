const express = require('express');
const routes = express.Router();

routes.use('/', require('./postagem'))

module.exports = routes;