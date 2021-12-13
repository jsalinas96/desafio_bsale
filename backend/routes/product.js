const { Router } = require('express');
const router = Router();

const db_connection = require('../database');


//Obtener productos filtrados
router.get('/api/product', (req, res) => {
    const filters = req.query;
    const search = filters.search;
    const orderBy = filters.orderBy;
    const category = filters.category;
    if(search) {
        db_connection.query(`
        SELECT *, product.name as name, product.id as id FROM product 
        LEFT JOIN category ON product.category = category.id
        WHERE product.name LIKE ? OR category.name LIKE ?
        ORDER BY price ` +orderBy ,
        ['%'+search+'%', '%'+search+'%'], (err, rows) => {
            if(!err){
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    } else {
        db_connection.query("SELECT * FROM product WHERE category = ? ORDER BY price "+orderBy ,[category], (err, rows) => {
            if(!err){
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    }
});

//Obtener TODOS los productos
router.get('/api/products', (req, res) => {
    db_connection.query('SELECT * FROM product', (err, rows) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Obtener UN producto según id
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