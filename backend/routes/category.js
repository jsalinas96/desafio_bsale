const express = require('express');
const router = express.Router();

const db_connection = require('../database');

router.get('/api/category', (req, res) => {
    db_connection.query('SELECT * FROM category', (err, rows) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/category/:id', (req, res) => {
    const id = req.params.id;
    db_connection.query('SELECT * FROM category WHERE id = ?', [id], (err, rows) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;