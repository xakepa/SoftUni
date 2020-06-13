const homeHandler = (req, res, next) => {
    res.nums = [1, 3, 4, 6, 8];
    next()
};

const searchHandler = (req, res) => res.send('Search Page');


module.exports = {
    homeHandler,
    searchHandler
}