const mysql = require('mysql');

const db_connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db_connection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = db_connection;