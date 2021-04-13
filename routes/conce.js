const express = require('express'),
    router = express.Router();

module.exports = router


router.get('/allVeh', function (req, res) {
    let sql = `SELECT * FROM vrp_estoque`;

    db.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Vehicles retrieved successfully",
            data
        })

    })
})

router.get('/allCars', function (req, res) {
    let sql = `SELECT * FROM vrp_estoque WHERE category = "Car"`;

    db.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Cars retrieved successfully",
            data
        })

    })
})

router.get('/allMotos', function (req, res) {
    let sql = `SELECT * FROM vrp_estoque WHERE category = "Motorcycle"`;

    db.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Motorcycles retrieved successfully",
            data
        })

    })
})

router.get('/allImports', function (req, res) {
    let sql = `SELECT * FROM vrp_estoque WHERE category = "Import"`;

    db.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "Imported vehicles retrieved successfully",
            data
        })

    })
})

router.get('/userOwened/:id', function (req, res) {
    let sql = `SELECT * FROM vrp_user_vehicles WHERE user_id = ` + req.params.id;

    db.query(sql, function (err, data) {

        if (err) throw err;
        res.json({
            status: 200,
            message: "User vehicles retrieved successfully",
            data
        })

    })
})

router.get('/vehInfo/:id', function (req, res) {
    let sql = `SELECT * FROM vrp_estoque WHERE car = "` + req.params.id + `"`;

    db.query(sql, function (err, data) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "User vehicles retrieved successfully",
            data
        })

    })
})