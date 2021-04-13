const express = require('express'),
    router = express.Router();
module.exports = router;

const axios = require('axios');

router.post('/newWhitelist', function (req, res) {
    let sql = `INSERT INTO whitelists(discord_id,respostas,numero) VALUES (?)`;

    const values = [
        req.body.bruteData.id,
        JSON.stringify(req.body.whitelistData),
        req.body.bruteData.number
    ]

    db3.query(sql,[values], function (err, data) {

        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })
})

router.put('/addId/:id', function (req, res) {
    let sql = `UPDATE whitelists SET five_id = ? WHERE discord_id  = ` + req.params.id;

    const values = [
        req.body.five_id
    ]

    axios({
        method: 'put',
        url: 'https://vegasapi.herokuapp.com/users/whitelisted/'+req.body.five_id,
    });

    db3.query(sql,[values], function (err, data) {

        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })
})

router.put('/aprovado/:id/:number', function (req, res) {
    let sql = `UPDATE whitelists SET aprovado = ? WHERE discord_id = `+ req.params.id + ` AND numero = `+req.params.number;

    const values = [
        req.body.aprovado
    ]

    db3.query(sql,[values], function (err, data) {

        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })
})

router.get('/getWlById', function (req, res) {
    let sql = `SELECT * FROM whitelists WHERE discord_id =`+req.body.id;

    db3.query(sql, function (err, data) {

        if (err) throw err;
        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No user found with the id provided",
                    status: 201,
                    data
                })
        } else {
            return res
                .status(200)
                .json({
                    message: "Reports retrieved successfully",
                    status: 200,
                    data
                })
        }

    })
})


router.get('/a', function (req, res) {

    return res
            .status(200)
            .json({
                message: "Reports retrieved successfully",
                status: 200,
            })
})

