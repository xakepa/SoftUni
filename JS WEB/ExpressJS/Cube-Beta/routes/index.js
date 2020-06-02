const express = require('express');
const router = express.Router();
const readCubes = require('../controllers/getCubes');
const Cube = require('../models/cube');

router.get('/', (req, res) => {

    res.render('index', {
        cubes: readCubes
    })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body

    const cube = new Cube(name, description, imageUrl, difficultyLevel);
    cube.saveCube();

    res.redirect(301, '/');
})

router.get('/details/:id', (req, res) => {

    const id = req.params.id;
    const cube = readCubes().find(c => c.id === id);

    res.render('details', {
        ...cube
    });
})

// router.all('*', (req, res) => {
//     res.render('404');
// })

module.exports = router;