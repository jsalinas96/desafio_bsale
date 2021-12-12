if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

//Settings

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(require('./routes/product'));
app.use(require('./routes/category'));

///Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(port , ()=>{
    console.log('Server on port: ', port)
})
