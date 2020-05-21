const http = require('http');
const port = process.env.port || 8000;
const handlers = require('./handlers');

http.createServer((req, res) => {
    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }

}).listen(port);

console.log(`Server is listening on port ${port}...`);