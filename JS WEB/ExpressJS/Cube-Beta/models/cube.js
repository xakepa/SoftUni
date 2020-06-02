const uniqid = require('uniqid');
const fs = require('fs');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.id = uniqid();
        this.name = name || 'No name';
        this.description = description || 'No Description';
        this.imageUrl = imageUrl || 'No image';
        this.difficultyLevel = difficultyLevel || 1;
    }

    saveCube() {
        const dataObj = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficultyLevel: this.difficultyLevel
        }

        fs.readFile('./config/database.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let db = JSON.parse(data);
            db.push(dataObj);

            fs.writeFile('./config/database.json', JSON.stringify(db), err => {
                if (err) {
                    throw err;
                }
                console.log('The file has been saved to the database');
            })
        })
    }
}

module.exports = { Cube };

const cubche = new Cube('obiknoven', 'NA', 'nqma-snimka', 2);
cubche.saveCube()