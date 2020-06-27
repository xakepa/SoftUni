require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect to DB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, err => {
  if (err) {
    throw err;
  }
  console.log('Database is connected successfully !');
});


app.use(usersRouter, indexRouter);

app.listen(process.env.PORT,
  console.log(`App is listening on port ${process.env.PORT}!`));