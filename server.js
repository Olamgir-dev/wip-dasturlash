const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// const mongoose = require('mongoose');

app.use(express.json());
const port = 5000;

app.use(express.static('/images'));

app.use(cors());


//view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.disable('view cache');
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});
const baza = require('./baza')
app.use('/api', baza);

app.listen(port, () => {
    console.log(`Server ${port} portda ishga tushdi va MongoDB ga ulandi`);
});

