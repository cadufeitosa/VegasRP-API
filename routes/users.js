const express = require('express'),
    router = express.Router();

router.get('/getDatatable', function (req, res) {
    let sql = `SELECT * FROM vrp_user_data WHERE dkey = "vRP:datatable"`;

    db.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "User lists retrieved successfully",
            data
        })
    })
});

router.get('/getUserMoney/:id', function (req, res) {
    let sql = `SELECT * FROM vrp_user_moneys WHERE user_id = ?`;
    const values = [
        req.params.id
    ]

    db.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })
})

router.put('/editUserDiamods/:id', function (req, res) {
    let sql = `UPDATE vrp_user_moneys SET diamante = diamante+? WHERE user_id = ` + req.params.id;
    const values = [
        req.body.dima
    ]

    db.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })

})

router.get('/getAllItens', function (req, res) {
    let sql = `SELECT dvalue FROM vrp_user_data WHERE dkey = 'vRP:datatable'`;

    db.query(sql, function (err, data) {

        console.log(testando2)

        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })
})

router.put('/whitelisted/:id', function (req, res) {
    let sql = `UPDATE vrp_users SET whitelisted = 1 WHERE id = ` + req.params.id;

    db.query(sql, function (err, data) {

        if (err) throw err;
        res.json({
            status: 200,
            message: "User money retrieved successfully",
            data
        })

    })
})

module.exports = router;