const url = require('url');
const path = require('path');
const fs = require('fs');
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

        const index = fs.createReadStream(filePath);

        index.on('data', (data) => {

            const modifiedCats = cats.map(cat => `
            <li>
            <img src="${'./content/images/' + cat.image}" alt="${cat.name}">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
                    </ul>
                    </li>`);

            const modifiedData = String(data).replace('{{cats}}', modifiedCats);

            res.write(modifiedData);
        });

        index.on('end', () => res.end());

        index.on('error', (err) => {
            console.log(err);
        });

    } else {
        return true;
    }
}
