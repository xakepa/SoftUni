const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



module.exports = (app) => {
    app.use(cookieParser());
    app.use(express.json())
    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }));

    app.set('view engine', 'hbs');

    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(express.static('static'));

};