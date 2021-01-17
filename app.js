const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute);

const carListRoute = require('./routes/carLists');
app.use('/carList', carListRoute);

const user = require('./routes/users');
app.use('/user', user);

const order = require('./routes/orders');
app.use('/order', order);


//Conection
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to dB')
);

app.listen(3000);