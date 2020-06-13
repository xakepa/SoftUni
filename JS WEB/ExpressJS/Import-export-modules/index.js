const express = require('express');
const { homeHandler, searchHandler } = require("./homeHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', homeHandler);

app.get('/search', searchHandler);
app.listen(PORT, err => {
    if (err) {
        return console.log(err);
    }

    console.log(`App is listening at ${PORT}...`);
})

