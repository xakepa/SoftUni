const express = require('express');
const router = express.Router();
const readCubes = require('../controllers/getCubes');
const fs = require('fs');
const Cube = require('../models/cube');
// const delCube = require('../controllers/deleteCube');

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

router.get('/delete/:id', (req, res) => {
    const cubes = readCubes();
    const id = req.params.id;

    cubes.forEach((cube, i) => {
        if (cube.id === id) {
            cubes.splice(i, 1);
        }
    });

    fs.writeFile('./config/database.json', JSON.stringify(cubes), err => {
        if (err) {
            throw err;
        }
        console.log('The file has been deleted');
    })
    res.redirect(301, '/');
})

// router.all('*', (req, res) => {
//     res.render('404');
// })

module.exports = router;