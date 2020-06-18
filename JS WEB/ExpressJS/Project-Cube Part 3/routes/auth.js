const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/register', (req, res) => {
    res.render('./auth/registerPage')
})
router.post('/register', (req, res) => {
    const { username, password, repeatPassword } = req.body

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, (err, password) => {
        if (err) {
            console.log(err);
        }

        const users = new Users({ username, password })
        users.save();
    })

    res.redirect(302, '/');
})

router.get('/login', (req, res) => {

    res.render('./auth/loginPage')
})

router.post('/login', (req, res) => {
    const { username, password } = req.body


    res.redirect(302, '/');
})

module.exports = router;