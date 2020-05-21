const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../database/cats.json');
const breeds = require('../database/breeds.json');
const http = require('http');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    let filePath;

    if (pathname === '/' && req.method === 'GET') {
        filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('Page not found!');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data);
            res.end();
        })

    } else {
        return true;
    }
}
