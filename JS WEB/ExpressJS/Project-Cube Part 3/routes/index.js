const express = require('express');
const router = express.Router();
const Cube = require('../models/cube');
const jwt = require('jsonwebtoken');
const { isAuth, authAccessJSON } = require('../controllers/user');

router.get('/', async (req, res) => {

    const cubes = await Cube.find().lean();
    const isLogged = req.cookies.jwt;

    res.render('index', {
        cubes,
        isLogged
    })
})

router.get('/create', isAuth, (req, res) => {
    const isLogged = req.cookies.jwt;

    res.render('create', {
        isLogged
    })
})

router.post('/create', authAccessJSON, (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body

    const token = req.cookies.jwt;
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);

    const cube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel,
        creatorId: decodedJwt.userId
    });
    cube.save(err => {
        if (err) {
            console.log(err);
            return res.render('create');
        }
        res.redirect(302, '/');
    });
})

router.get('/details/:id', async (req, res) => {

    const cubeWithAccs = await Cube.findById(req.params.id)
        .populate('accessories').lean();
    const isLogged = req.cookies.jwt;

    res.render('details', {
        ...cubeWithAccs,
        isEmpty: cubeWithAccs.accessories.length === 0,
        isLogged
    });
});

router.get('/delete/:id', isAuth, (req, res) => {
    const id = req.params.id;

    Cube.findByIdAndDelete(id, err => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect(301, '/');
})

router.get('/about', (req, res) => {
    const isLogged = req.cookies.jwt;

    res.render('about', {
        isLogged
    });
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/login');
})

router.all('*', (req, res) => {
    res.render('404');
})

module.exports = router;