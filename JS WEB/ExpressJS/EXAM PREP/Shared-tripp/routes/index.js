const express = require('express');
const { isLoggedIn } = require('../handlers/authentication');
const router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn, (req, res) => {

  res.render('./guest/home', {
    isLogged: res.isLogged,
    loggedEmail: res.email
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
})

module.exports = router;
