const express = require('express');
const router = express.Router();
const userRegister = require('../handlers/userRegister');
const userLogin = require('../handlers/userLogin');
const { registerValidator } = require('../handlers/validators');
const { isLoggedIn } = require('../handlers/authentication');

router.get('/register', isLoggedIn, (req, res) => {
  if (res.isLogged) {
    return res.redirect(302, '/')
  }

  res.render('./guest/register');
})

router.post('/register', registerValidator, async (req, res) => {

  await userRegister(req, res);
})
router.get('/login', isLoggedIn, (req, res) => {
  if (res.isLogged) {
    return res.redirect(302, '/')
  }

  res.render('./guest/login');
})

router.post('/login', async (req, res) => {
  const status = await userLogin(req, res);

  if (status) {
    res.redirect(302, '/');
  }
})

module.exports = router;
