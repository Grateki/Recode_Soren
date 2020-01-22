var mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'root',
    host: 'daniel-W240HU-W250HUQ',
    port: 3310,
    password: ''
});

connection.connect(function(err) {
    if(err) {
        console.log('Error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId)
})

module.exports = connection;