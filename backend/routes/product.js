const { Router } = require('express');
const router = Router();

const db_connection = require('../database');

router.get('/api/product', (req, res) => {
    const filters = req.query;
    console.log('filters',filters);
    const category = filters.category;
    const orderBy = filters.orderBy;
    db_connection.query('SELECT * FROM product WHERE category = ? ORDER BY price '+orderBy ,[category], (err, rows) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/product/:id', (req, res) => {
    const id = req.params.id;
    db_connection.query('SELECT * FROM product WHERE id = ?', [id], (err, rows) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;