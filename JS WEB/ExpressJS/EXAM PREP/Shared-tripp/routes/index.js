const express = require('express');
const { isLoggedIn, isAuth } = require('../handlers/authentication');
const createTrip = require('../handlers/createTrip');
const Trip = require('../models/trip');
const router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn, (req, res) => {

  res.render('./guest/home', {

    isLogged: res.isLogged,
    loggedEmail: res.email
  });
});

router.get('/main', isAuth, isLoggedIn, async (req, res) => {

  const trips = await Trip.find().lean();

  res.render('main', {
    trips,
    isLogged: res.isLogged,
    loggedEmail: res.email
  });
})

router.get('/create-trip', isAuth, isLoggedIn, (req, res) => {
  res.render('offerTripp', { loggedEmail: res.email })
})

router.post('/create-trip', async (req, res) => {
  await createTrip(req, res);
  res.redirect('/main');
})


router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
})

module.exports = router;
