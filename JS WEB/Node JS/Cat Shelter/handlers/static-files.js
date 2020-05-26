const url = require('url');
const renderHtml = require('./renderHtml');

module.exports = function (req, res) {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {
        renderHtml(`./${pathname}`, res);
    } else {
        return true;
    }
}