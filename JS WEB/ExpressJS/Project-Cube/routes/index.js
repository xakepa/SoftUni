const { Router } = require('express');
const { readCube } = require('../controllers/read-cube');
const Cube = require('../models/cube');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Cube Workshop',
        cubes: readCube()
    });
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About | Cube Workshop'
    });
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Cube'
    });
}).post('/create', (req, res) => {
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

    const cube = readCube()
        .find(cube => cube.id === id);

    res.render('details', {
        title: 'Cube Details',
        ...cube
    });
})

router.all('*', (req, res) => {
    res.render('404');
})

module.exports = router;