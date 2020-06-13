const homeHandler = (req, res) => res.send('Home page');
const searchHandler = (req, res) => res.send('SEARCH page');


module.exports = {
    homeHandler,
    searchHandler
}