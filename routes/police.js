const express = require('express'),
    router = express.Router();

router.get('/getPunish', function (req, res) {
    let sql = `SELECT * FROM policia_punishment`;
    db3.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Punishments retrieved successfully",
            data
        })
    })
});

router.get('/getReport', function (req, res) {
    let sql = `SELECT * FROM policia_report`;
    db3.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Reports retrieved successfully",
            data
        })
    })
});

router.get('/getWarn', function (req, res) {
    let sql = `SELECT * FROM policia_warn`;
    db3.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

router.post('/newArrest', function (req, res) {
    let sql = 'INSERT INTO policia_punishment(id, motivo, oficial, datahora, meses) VALUES (?)';
    const values = [
        req.body.id,
        req.body.motivo,
        req.body.oficial,
        req.body.datahora,
        req.body.meses
    ]
    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

router.post('/newFine', function (req, res) {
    let sql = 'INSERT INTO policia_punishment(id, motivo, oficial, datahora, valor) VALUES (?)';
    const values = [
        req.body.id,
        req.body.motivo,
        req.body.oficial,
        req.body.datahora,
        req.body.valor
    ]
    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

router.post('/newReport', function (req, res) {
    let sql = 'INSERT INTO policia_report(id, suspeito, description, oficial, datahora) VALUES (?)';
    const values = [
        req.body.id,
        req.body.suspeito,
        req.body.description,
        req.body.oficial,
        req.body.datahora
    ]
    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

router.post('/newWarn', function (req, res) {
    let sql = 'INSERT INTO policia_warn(id, reason, oficial, datahora) VALUES (?)';
    const values = [
        req.body.id,
        req.body.reason,
        req.body.oficial,
        req.body.datahora,
    ]
    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

router.get('/getPunishmentById/:id', function (req, res) {
    let sql = 'SELECT * FROM policia_punishment WHERE id = ?';
    const values = [
        req.params.id
    ]

    db3.query(sql, [values], function (err, data) {

        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No data found with provided ID",
                    status: 201
                })
        } else {
            return res
                .status(200)
                .json({
                    message: "Punishments retrieved successfully",
                    status: 200,
                    data
                })
        }

        if (err) throw err;

    })

});


router.get('/getWarnById/:id', function (req,res) {
    let sql = 'SELECT * FROM policia_warn WHERE id = ?';
    const values = [
        req.params.id
    ]

    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No data found with provided ID",
                    status: 201,
                    data
                })
        } else {
            return res
                .status(200)
                .json({
                    message: "Warns retrieved successfully",
                    status: 200,
                    data
                })
        }
    })
});

router.get('/getReportBySuspect/:id', function(req, res) {
    let sql = 'SELECT * FROM policia_report WHERE suspeito = ?'
    const values = [
        req.params.id
    ]

    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No data found with provided ID",
                    status: 201,
                    data
                })
        } else {
            return res
                .status(200)
                .json({
                    message: "Warns retrieved successfully",
                    status: 200,
                    data
                })
        }
    })
});

router.get('/getReportById/:id', function(req, res) {
    let sql = 'SELECT * FROM policia_report WHERE id = ?'
    const values = [
        req.params.id
    ]

    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No data found with provided ID",
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
});

router.get('/getCredenciaisById/:id', function(req, res) {
    let sql = 'SELECT * FROM policia_credenciais WHERE passaporte = ?'
    const values = [
        req.params.id
    ]

    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No data found with provided ID",
                    status: 201,
                    data
                })
        } else {
            return res
                .status(200)
                .json({
                    message: "Credentials retrieved successfully",
                    status: 200,
                    data
                })
        }
    })
});

router.post('/login', function(req, res) {
    let sql = 'SELECT * FROM policia_login WHERE username = ?';

    const values  = [
        req.body.username
    ]

    const username = req.body.username
    const senha = req.body.password

    db3.query(sql, [values], function (err, data) {

        if (err) throw err;

        if (data.length === 0) {
            return res
                .status(201)
                .json({
                    message: "No user found with the username provided",
                    status: 201,
                })
        } else if (username === data[0].username && senha === data[0].password) {
            return res
                .status(200)
                .json({
                    message: "Login Successful!",
                    status: 200,
                })
        } else {
            return res
                .status(202)
                .json({
                    message: "Reports retrieved successfully",
                    status: 202,
                })
        }
    })
});

router.post('/newAviso', function (req, res) {
    let sql = 'INSERT INTO policia_aviso(titulo, texto, oficial, datahora) VALUES (?)';
    const values = [
        req.body.titulo,
        req.body.texto,
        req.body.oficial,
        req.body.datahora,
    ]
    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

router.post('/newCredential', function (req, res) {
    let sql = 'INSERT INTO policia_credenciais(passaporte, tipo, validade, notas, oficial, datahora) VALUES (?)';
    const values = [
        req.body.passaporte,
        req.body.tipo,
        req.body.validade,
        req.body.notas,
        req.body.oficial,
        req.body.datahora
    ]
    db3.query(sql, [values], function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Warns retrieved successfully",
            data
        })
    })
});

module.exports = router;