const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {

    app.set('view engine', 'hbs');

    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static('./static'));

};