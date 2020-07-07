const express = require('express');
const { isLoggedIn, isAuth, authAccessJSON } = require('../handlers/authentication');
const createPlay = require('../handlers/createPlay');
const { theatherFormValidator } = require('../handlers/validators');
const Play = require('../models/play');
const likePlay = require('../handlers/likePlay');
const router = express.Router();


/* GET home page. */

router.get('/', isLoggedIn, async (req, res) => {
  const plays = await Play.find().lean();

  plays.reverse()
    .map(play => {
      const isCreator = res.userId == play.creatorId;
      play.owner = isCreator;
    })

  if (res.isLogged) {
    return res.render('home', {
      isLogged: res.isLogged,
      plays
    })
  }

  plays.sort((a, b) => b.usersLiked.length - a.usersLiked.length)
  const firstThree = plays.slice(0, 3);
  return res.render('home', {
    plays: firstThree
  })
});

router.get('/create-theater', isAuth, isLoggedIn, (req, res) => {
  res.render('create-theater', {
    isLogged: res.isLogged,
  })
})

router.post('/create-theater', authAccessJSON, isLoggedIn, theatherFormValidator, createPlay);

router.get('/details/:id', isAuth, isLoggedIn, async (req, res) => {
  const play = await Play.findById(req.params.id).lean();
  const isVoted = play.usersLiked.includes(res.user);
  const isCreator = res.userId == play.creatorId;

  res.render('theater-details', {
    ...play,
    isVoted,
    isCreator,
    isLogged: res.isLogged,
  })
})

router.get('/details/like/:id', isAuth, isLoggedIn, async (req, res) => {
  likePlay(req, res)
})

router.get('/edit/:id', isLoggedIn, async (req, res) => {

  const play = await Play.findById(req.params.id).lean();

  res.render('edit-theater', {
    ...play,
    isLogged: res.isLogged,
  })
})

router.post('/edit/:id', authAccessJSON, async (req, res) => {
  const id = req.params.id;
  const isPublic = req.body.isPublic;

  if (isPublic) {
    req.body.isPublic = true;
  } else {
    req.body.isPublic = false;
  }

  try {
    await Play.findByIdAndUpdate(id, { $set: req.body }, { upsert: true });
  } catch (error) {
    console.error(error);
  }
  return res.redirect(`/details/${id}`)
})

router.get('/delete/:id', isAuth, (req, res) => {
  const id = req.params.id;

  Play.findByIdAndDelete(id)
    .then(() => res.redirect(301, '/'))
    .catch(console.error)
})

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
})

module.exports = router;