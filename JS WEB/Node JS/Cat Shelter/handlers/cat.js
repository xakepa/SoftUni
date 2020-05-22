// const url = require('url');
// const fs = require('fs');
// const path = require('path');
// const qs = require('querystring');
// const breeds = require('../database/breeds.json');
// const cats = require('../database/cats.json');

// module.exports = ((req, res) => {
//     const pathname = url.parse(req.url).pathname;
//     let filePath;

//     if (pathname === '/cats/add-cat' && req.method === 'GET') {
//         filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 console.log(err);

//                 res.writeHead(404, {
//                     'Content-Type': 'text/plain'
//                 });
//                 res.write('Page not found!');
//                 res.end();
//                 return;
//             }

//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.write(data);
//             res.end();
//         })

//     } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
//         filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

//         const index = fs.createReadStream(filePath);

//         index.on('data', (data) => {
//             res.write(data);
//         });

//         index.on('end', () => res.end());

//         index.on('error', (err) => {
//             console.log(err);
//         });
//     } else {
//         return true;
//     }
// })