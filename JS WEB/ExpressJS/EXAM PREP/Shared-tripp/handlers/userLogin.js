const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = async (req, res) => {

    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
        return res.render('./guest/login', {
            error: 'Username does not exist'
        });
    }

    const status = await bcrypt.compare(password, user.password);
    if (status) {

        const token = jwt.sign({
            userId: user._id,
            email: user.email
        },
            process.env.JWT_SECRET, { expiresIn: 3600 * 1000 * 24 });

        res.cookie('jwt', token, { maxAge: 3600 * 1000 * 24, httpOnly: true });
        res.email = user.email;
    } else {
        return res.render('./guest/login', {
            error: 'WRONG PASSWORD !'
        })
    }
    return status;
}