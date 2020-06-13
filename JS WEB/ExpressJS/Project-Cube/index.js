const router = require('./routes');

const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./routes');

app.use(router);

app.listen(config.port, console.log(`Server is running at http://localhost:${config.port}`));