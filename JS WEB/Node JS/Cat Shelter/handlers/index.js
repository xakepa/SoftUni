const homeHandler = require('./home');
const catHandler = require('./cat');
const staticFiles = require('./static-files');

module.exports = [homeHandler, catHandler, staticFiles];