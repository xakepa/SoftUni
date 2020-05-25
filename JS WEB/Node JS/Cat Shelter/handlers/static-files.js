const url = require('url');
const fs = require('fs');
const path = require('path');
const readHtml = require('./readHtml');

function getContentType(url) {

    const extensionMap = {
        '.css': 'text/css',
        '.html': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.jpeg': 'image/jpeg',
        '.ico': 'image/ico'
    }

    const ext = extensionMap[path.extname(url)];

    if (ext) {
        return ext;
    } else {
        return true;
    }
}

module.exports = function (req, res) {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {

        if (pathname.endsWith('jpg') || pathname.endsWith('jpeg') || pathname.endsWith('png') || pathname.endsWith('ico') && req.method === 'GET') {
            fs.readFile(`./${pathname}`, (err, data) => {
                if (err) {
                    console.log(err);
                    res.writeHead('404', {
                        'Content-type': 'text/plain'
                    })

                    res.write('Page not found !');
                    res.end();
                    return;
                }

                res.writeHead('200', {
                    'Content-type': getContentType(pathname)
                })
                res.write(data);
                res.end();
            })
        } else {
            fs.readFile(`./${pathname}`, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    res.writeHead('404', {
                        'Content-type': 'text/plain'
                    })

                    res.write('Page not found !');
                    res.end();
                    return;
                }

                res.writeHead('200', {
                    'Content-type': getContentType(pathname)
                })
                res.write(data);
                res.end();
            })
        }
    } else {
        return true;
    }
}