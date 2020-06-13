const { readFileSync } = require('fs');

const readCube = () => {
    const db = readFileSync('./config/database.json', 'utf8');
    return JSON.parse(db)
}

module.exports = { readCube }