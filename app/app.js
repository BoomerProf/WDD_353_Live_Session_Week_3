const express = require('express');
const ejs = require('ejs');
const router = require('../router/router');

const app = express();

// middleware to set payload and url encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs middleware to set ejs templating
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

// declare static file locations
app.use(express.static('views'));
app.use(express.static('public'));
// middle ware to router
app.use('/', router);
module.exports = app;
