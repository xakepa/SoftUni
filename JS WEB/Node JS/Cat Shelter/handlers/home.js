const url = require('url');
const path = require('path');
const cats = require('../database/cats.json');
const breeds = require('../database/breeds.json');
const http = require('http');
const readHtml = require('./readHtml');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    let filePath;

    if (pathname === '/' && req.method === 'GET') {
        filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );

        readHtml(filePath, res);

    } else if (pathname === '/cats/add-cat' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        readHtml(filePath, res);

    } else {
        return true;
    }
}
