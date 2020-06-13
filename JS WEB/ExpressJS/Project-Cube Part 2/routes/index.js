const express = require('express');
const router = express.Router();
const fs = require('fs');
const Cube = require('../models/cube');


router.get('/', async (req, res) => {

    const cubes = await Cube.find().lean();

    res.render('index', {
        cubes
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

    const cube = new Cube({ name, description, imageUrl, difficultyLevel });
    cube.save()

    res.redirect(301, '/');
})

router.get('/details/:id', (req, res) => {

    const id = req.params.id;

    Cube.findById(id, (err, cube) => {
        if (err) {
            console.log(err);
        }

        res.render('details', {
            name: cube.name,
            description: cube.description,
            imageUrl: cube.imageUrl,
            difficultyLevel: cube.difficultyLevel
        });
    });
})

router.get('/delete/:id', (req, res) => {
    const cubes = readAllCubes();
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

router.all('*', (req, res) => {
    res.render('404');
})

module.exports = router;