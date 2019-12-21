const express = require("express");
const server = express();



server.listen(3000, () => {
    console.log("Servidor online")
})

module.exports = server;