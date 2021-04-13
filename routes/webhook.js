const express = require('express'),
    router = express.Router();

const axios = require('axios');

router.post('/teste', function (req, res) {
    let sql = `INSERT INTO teste(teste) VALUES (?) `;
    const values = [
        req.body.passaporte
    ]

    db.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Reports retrieved successfully",
            data
        })
    })
});


router.post('/batch', async (req, res) => {

    const passaporte = req.body.line_items[0].meta_data[0].display_value;
    res.sendStatus(200);

    const request = req.body

    qtd = request.line_items.map((values) => {
            axios.put('http://localhost:5000/users/editUserDiamods/' + values.meta_data[0].value, {
                dima: values.sku
            })
        }
    )


    axios.post('http://localhost:5000/webhook/teste', {
        passaporte: passaporte
    })
        .then((response) => {
            //console.log(response);
        }, (error) => {
            console.log(error);
        });
});


module.exports = router