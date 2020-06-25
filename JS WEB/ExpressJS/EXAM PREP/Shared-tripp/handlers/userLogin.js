const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = async (req, res) => {

    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    const status = await bcrypt.compare(password, user.password);
    if (status) {

        const token = jwt.sign({
            userId: user._id
        },
            process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 * 1000 });

        res.cookie('jwt', token);
    }
    return status;
}