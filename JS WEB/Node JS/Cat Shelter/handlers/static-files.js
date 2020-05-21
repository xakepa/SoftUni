const url = require('url');
const fs = require('fs');

// function getContentType(url) {

//     if (url.endsWith('css')) {
//         return 'text/css';
//     } else if (url.endsWith('html')) {
//         return 'text/html';
//     } else if (url.endsWith('png')) {
//         return 'image/png';
//     } else if (url.endsWith('jpg')) {
//         return 'image/jpeg';
//     }
//     else {
//         return true;
//     }
// }

// module.exports = function (req, res) {
//     const pathname = url.parse(req.url).pathname;

//     if (pathname.startsWith('/content') && req.method === 'GET') {
//         fs.readFile(`./${pathname}, utf-8`, (err, data))
//     }
// }