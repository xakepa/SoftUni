const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const breeds = require('../database/breeds.json');
const cats = require('../database/cats.json');
const readHtml = require('./readHtml');
const forimidable = require('formidable');
const { callbackify } = require('util');


module.exports = ((req, res) => {
    const pathname = url.parse(req.url).pathname;
    let filePath;


    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        //With Streams

        const index = fs.createReadStream(filePath);

        index.on('data', (data) => {
            const catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            const modifiedData = String(data).replace('{{catBreeds}}', catBreedPlaceholder);
            res.write(modifiedData);
        });

        index.on('end', () => res.end());

        index.on('error', (err) => {
            console.log(err);
        });


    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {

        const form = new forimidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }
            const oldPath = files.upload.path;
            const newPath = path.normalize(path.join('./content/images', files.upload.name));

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    throw err;
                }
                console.log('Files was uploaded successfully');
            })

            fs.readFile('./database/cats.json', 'utf-8', (err, data) => {
                if (err) {
                    throw err;
                }

                const allCats = JSON.parse(data);
                allCats.push({ id: cats.length = 1, ...fields, image: files.upload.name });
                const json = JSON.stringify(allCats);
                fs.writeFile('./database/cats.json', json, () => {
                    res.writeHead(301, { location: '/' });
                    res.end();
                });
            });
        });

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        readHtml(filePath, res);

    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
        let formData = '';
        req.on('data', data => {
            formData += data;

            req.on('end', () => {
                let body = qs.parse(formData);

                fs.readFile('./database/breeds.json', (err, data) => {
                    if (err) {
                        throw err;
                    }

                    const breeds = JSON.parse(data);
                    breeds.push(body.breed);
                    const json = JSON.stringify(breeds);

                    fs.writeFile('./database/breeds.json', json, 'utf-8', () => console.log('The breed has been added successfully!'));
                })

                res.writeHead(301, { location: '/' });
                res.end()
            });
        });
    }
    else {
        return true;
    }
})