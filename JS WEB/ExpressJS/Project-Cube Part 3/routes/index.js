const express = require('express');
const router = express.Router();
const Cube = require('../models/cube');



router.get('/', async (req, res) => {

    const cubes = await Cube.find().lean();

    res.render('index', {
        cubes
    })
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

    res.render('details', {
        ...cubeWithAccs,
        isEmpty: cubeWithAccs.accessories.length === 0
    });
});




router.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    Cube.findByIdAndDelete(id, err => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect(301, '/');
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.all('*', (req, res) => {
    res.render('404');
})


module.exports = router;