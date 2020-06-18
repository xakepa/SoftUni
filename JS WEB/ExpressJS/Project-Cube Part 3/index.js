require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const accessoryRouter = require('./routes/accessories');
const session = require('express-session');
const app = require('express')();

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


app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}! Now its up to you...`));