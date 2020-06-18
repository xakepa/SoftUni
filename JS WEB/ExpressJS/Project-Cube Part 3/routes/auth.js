const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const { saveUser } = require('../controllers/user');

router.get('/register', (req, res) => {
    res.render('./auth/registerPage')
})
router.post('/register', async (req, res) => {

    const status = await saveUser(req, res);

    if (status) {
        res.redirect(302, '/');
    }
})

router.get('/login', (req, res) => {

    res.render('./auth/loginPage')
})

router.post('/login', (req, res) => {
    const { username, password } = req.body


    res.redirect(302, '/');
})

module.exports = router;