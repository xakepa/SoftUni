const express = require('express');
const { homeHandler, searchHandler } = require('./homeHandler');
const home = require('./routes/home-page');
const app = express();
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 3000;

app.engine('.hbs', handlebars({
    extname: '.hbs'
}))

app.set('view engine', '.hbs');

app.use(express.static('./public'))

//standart way with one middleware
// app.get('/', homeHandler, (req, res) => {
//     return res.send(`Welcome ${res.nums}`)
// });

app.use((req, res, next) => {
    console.log(__dirname);
    next();
})
app.use(home)



app.get('/search', searchHandler);

app.get('/users/:userId', (req, res) => {
    const dynamicParams = req.params;
    res.send(dynamicParams);
})

// regexp matching everything with the word plamen
app.get(/.*plamen/, (req, res, next) => {
    req.firstMiddleware = 'First Middleware has been executed';
    next();
}, (req, res, next) => {
    req.secondMiddleware = 'Second Middleware has been executed';
    next();
}, (req, res) => {
    return res.send(`<h1>WELL DONE YOU FOUND THE SECRET PLAMEN\'S PAGE</h1>
    <h2>${req.firstMiddleware}</h2>\n
    <h2>${req.secondMiddleware}</h2>`);
})

app.get('/about', (req, res, next) => {
    req.users = JSON.stringify({ name: 'Plamen', age: 'still young', married: 'going to be' })
    next()
}, (req, res) => {
    return res.send(`About Page ${req.users}`);
})

app.all('*', (req, res) => {

    return res.send(`<h1>PAGE DOES NOT EXIST ${res.statusCode}</h1>`);
})

app.listen(PORT, err => {
    if (err) {
        return console.log(err);
    }

    console.log(`App is listening at ${PORT}...`);
})

