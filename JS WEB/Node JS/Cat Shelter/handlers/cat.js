const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const breeds = require('../database/breeds.json');
const cats = require('../database/cats.json');
const readHtml = require('./readHtml');

// HANDLER NOT WORKING...

module.exports = ((req, res) => {
    const pathname = url.parse(req.url).pathname;
    let filePath;

    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        readHtml(filePath, res);

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        readHtml(filePath, res);

        // alternative with Streams 

        // const index = fs.createReadStream(filePath);

        // index.on('data', (data) => {
        //     res.write(data);
        // });

        // index.on('end', () => res.end());

        // index.on('error', (err) => {
        //     console.log(err);
        // });
    } else {
        return true;
    }
})