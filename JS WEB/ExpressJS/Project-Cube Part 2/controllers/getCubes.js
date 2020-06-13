const util = require('util');
const fs = require('fs');

module.exports = () => {
    const db = fs.readFileSync('./config/database.json', 'utf8');
    return JSON.parse(db);
}
