require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const accessoryRouter = require('./routes/accessories');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = require('express')();

app.use(cookieParser());

app.use(session(
    {
        secret: 'mysupersecret',
        httpOnly: true,
        resave: true,
        saveUninitialized: true
    }))


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
mongoose.set('useCreateIndex', true);

require('./config/express')(app);

app.use(authRouter, accessoryRouter, indexRouter);


app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));