const bcrypt = require('bcrypt');
const saltRounds = 3;
const password = 'nowaParola';

// bcrypt.hash(password, saltRounds, function (err, hash) {
//     console.log(hash);
// })

let hashed = '';

bcrypt.hash(password, saltRounds)
    .then((result) => {
        console.log(result);
    }).catch(console.error())
