const express = require('express');
const { isLoggedIn, isAuth } = require('../handlers/authentication');
const createTrip = require('../handlers/createTrip');
const { tripFormValidator } = require('../handlers/validators');
const Trip = require('../models/trip');
const joinTrip = require('../handlers/joinTrip');
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

router.post('/create-trip', tripFormValidator, createTrip)


router.get('/details/:id', isLoggedIn, async (req, res) => {
  const trip = await Trip.findById(req.params.id).lean();
  const isDriver = res.userId == trip.creatorId;
  const isJoined = trip.buddies.includes(res.email);


  res.render('tripDetails', {
    ...trip,
    isJoined,
    isLogged: res.isLogged,
    isDriver,
    loggedEmail: res.email
  })
})

router.get('/details/join/:id', isLoggedIn, async (req, res) => {
  joinTrip(req, res)
})

router.get('/delete/:id', isAuth, (req, res) => {
  const id = req.params.id;

  Trip.findByIdAndDelete(id)
    .then(() => res.redirect(301, '/main'))
    .catch(console.error)
})

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
})

router.get('*', isLoggedIn, (req, res) => {
  res.render('404', {
    isLogged: res.isLogged,
    loggedEmail: res.email
  });
})

module.exports = router;
