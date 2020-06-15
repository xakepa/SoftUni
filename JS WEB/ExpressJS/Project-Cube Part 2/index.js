require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();
const router = require('./routes');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('Database is connected successfully !');
});

mongoose.set('useFindAndModify', false);

require('./config/express')(app);

app.use(router)

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));