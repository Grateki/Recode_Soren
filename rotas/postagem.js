const express = require('express');
const router = express.Router();

router.get('/postagens', (req, res) => {
    res.json({
        nome: "daniel",
        idade: 18
    });
});

module.exports = router;