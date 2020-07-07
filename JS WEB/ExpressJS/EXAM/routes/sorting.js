const express = require('express');
const { isLoggedIn } = require('../handlers/authentication');
const Play = require('../models/play');

const router = express.Router();
router.get('/sort-by-likes', isLoggedIn, async (req, res) => {
    const token = req.cookies.jwt;
    if (token) {


        const plays = await Play.find().lean();
        plays.sort((a, b) => b.usersLiked.length - a.usersLiked.length)

        return res.render('home', {
            isLogged: res.isLogged,
            plays
        })
    }
    return res.redirect('/')
})

router.get('/sort-by-date', isLoggedIn, async (req, res) => {
    const token = req.cookies.jwt;
    if (token) {


        const plays = await Play.find().lean();

        plays.map(p => p.createdAt = new Date(p.createdAt))

        plays.sort((a, b) => b.createdAt - a.createdAt)

        return res.render('home', {
            isLogged: res.isLogged,
            plays
        })
    }
    return res.redirect('/')
})

module.exports = router;