const express = require('express');
const router = express.Router();
const userRegister = require('../handlers/userRegister');
const userLogin = require('../handlers/userLogin');

router.get('/register', (req, res) => {
  res.render('./guest/register');
})

router.post('/register', async (req, res) => {

  userRegister(req, res);
})

router.get('/login', (req, res) => {
  res.render('./guest/login');
})

router.post('/login', async (req, res) => {
  const status = await userLogin(req, res);

  if (status) {
    res.redirect(302, '/');
  }
})

module.exports = router;
