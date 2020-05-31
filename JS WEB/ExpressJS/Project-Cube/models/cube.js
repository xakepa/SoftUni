const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

module.exports = class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.id = uuidv4();
        this.name = name || 'No Name';
        this.description = description || 'No description';
        this.imageUrl = imageUrl || 'no-image';
        this.difficultyLevel = difficultyLevel || 0;
    }

    saveCube() {

        const objData = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficultyLevel: this.difficultyLevel
        }

        fs.readFile('./config/database.json', 'utf8', (error, db) => {
            if (error) {
                throw error
            }
            db = JSON.parse(db);
            db.push(objData);
            fs.writeFile('./config/database.json', JSON.stringify(db), err => {
                if (err) {
                    throw err;
                }


                console.log('New cube is successfully stored');
            })
        })
    }
}