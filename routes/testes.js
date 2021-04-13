const express = require('express'),
    router = express.Router();
const axios = require('axios');


router.post('/itens', async (req, res) => {

    const passaporte = req.body.line_items[0].meta_data[0].display_value;
    res.sendStatus(200);

    console.log(passaporte)

});

module.exports = router