const mongoose = require('mongoose');
const config = require('./config');

mongoose.set('useCreateIndex', true);

module.exports = () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};