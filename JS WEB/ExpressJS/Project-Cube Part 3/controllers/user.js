const jwt = require('jsonwebtoken');
const Users = require('../models/user');
const bcrypt = require('bcrypt');



const saveUser = async (req, res) => {

    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const users = new Users({
        username,
        password: hashedPassword
    })

    const userObject = await users.save();

    const token = jwt.sign({
        userId: userObject._id,
        username: userObject.username
    },
        process.env.JWT_SECRET);

    res.cookie('jwt', token)
    return true;
}

const verifyUser = async (req, res) => {
    const { username, password } = req.body;

    //get user by username
    const user = await Users.findOne({ username });
    const status = await bcrypt.compare(password, user.password);

    if (status) {

        const token = jwt.sign({
            userId: user._id,
            username: user.username
        },
            process.env.JWT_SECRET);

        res.cookie('jwt', token);
    }

    return status;
}

module.exports = { saveUser, verifyUser };