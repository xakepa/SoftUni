const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isLoggedIn } = require('./authentication');

module.exports = async (req, res) => {

    const { username, password } = req.body;
    const user = await Users.findOne({ username });

    if (!user) {
        return res.render('./guest/login', {
            error: 'Username does not exist'
        });
    }

    const status = await bcrypt.compare(password, user.password);
    if (status) {

        const token = jwt.sign({
            userId: user._id,
            username
        },
            process.env.JWT_SECRET, { expiresIn: 3600 * 1000 * 24 });

        res.cookie('jwt', token, { maxAge: 3600 * 1000 * 24, httpOnly: true });
        res.user = username;
    } else {
        return res.render('./guest/login', {
            error: 'WRONG PASSWORD !'
        })
    }
    return status;
}