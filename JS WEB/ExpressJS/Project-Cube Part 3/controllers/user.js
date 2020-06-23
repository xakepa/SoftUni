const jwt = require('jsonwebtoken');
const Users = require('../models/user');
const bcrypt = require('bcrypt');
const getCube = require('./cubeController');


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

    if (!user) {
        return res.render('./auth/loginPage', {
            error: 'Username does not exist'
        });
    }

    const status = await bcrypt.compare(password, user.password);

    if (!status) {
        return res.render('./auth/loginPage', {
            error: 'WRONG PASSWORD !'
        })
    }

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

const isOwner = async (req, res) => {
    const token = req.cookies.jwt;
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
    const cube = await getCube(req.params.id);


    if (cube.creatorId == decodedJwt.userId) {
        return true;
    }
    return false;

}

const validatePassword = async (req, res, next) => {

    const { username, password, repeatPassword } = req.body;

    let error = '';
    const user = await Users.findOne({ username });

    const passwordValidator = /^(?=.*[0-9])(?=.*[a-zA-Z])\w{8,}$/

    if (username.length < 5) {
        error = 'Username must be at least 5 symbols';
    } else if (user) {
        error = 'Username already exist';
    } else if (password !== repeatPassword) {
        error = 'Passwords do not much';
    } else if (password.length < 8) {
        error = 'Password should be at least 8 digits and letters';
    } else if (!(password.match(passwordValidator))) {
        error = 'Password should be mix consisting at least one digit and only english letters';
    }

    if (error) {
        return res.render('./auth/registerPage', {
            error
        })
    }
    next();
}


module.exports = {
    saveUser,
    verifyUser,
    isAuth,
    guest,
    authAccessJSON,
    isOwner,
    validatePassword
};