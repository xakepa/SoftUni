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

const isAuth = (req, res, next) => {

    const token = req.cookies.jwt;
    if (!token) {
        return res.redirect(302, '/login');
    }

    try {
        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.redirect(302, '/login');
    }
}

const guest = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        return res.redirect(302, '/');
    }
    next();
}

const authAccessJSON = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.json({
            error: 'Not authenticated'
        })
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.json({
            error: 'Not authenticated'
        })
    }
}

module.exports = {
    saveUser,
    verifyUser,
    isAuth,
    guest,
    authAccessJSON
};