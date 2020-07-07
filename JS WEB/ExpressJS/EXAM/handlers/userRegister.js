const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10).then(hashedPassword => {

        Users.create({ username, password: hashedPassword })
            .then((user) => {
                const token = jwt.sign({
                    userId: user._id,
                    username
                },
                    process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 * 1000 });


                res.cookie('jwt', token, { maxAge: 60 * 60 * 60 * 1000, httpOnly: true });
                res.redirect(302, '/')
            }).catch(console.error)
    }).catch(console.error)
}