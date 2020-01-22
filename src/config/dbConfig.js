const mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3307,
    password: ''
});

connection.query('use soren;')

module.exports = connection;
