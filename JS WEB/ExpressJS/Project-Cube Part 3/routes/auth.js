const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const { saveUser, verifyUser } = require('../controllers/user');

router.get('/register', (req, res) => {
    res.render('./auth/registerPage')
})

router.post('/register', async (req, res) => {

    const status = await saveUser(req, res);

    if (status) {
        res.redirect(302, '/');
    }
})

router.get('/login', async (req, res) => {


    res.render('./auth/loginPage')
})

router.post('/login', async (req, res) => {

    const status = await verifyUser(req, res);
    if (status) {
        res.redirect(302, '/');
    } else {
        res.send('WRONG USERNAME OR PASSWORD')
    }

})

module.exports = router;