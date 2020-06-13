
const fs = require('fs');

module.exports = class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {

        this.name = name || 'No name';
        this.description = description || 'No Description';
        this.imageUrl = imageUrl || 'https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png';
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