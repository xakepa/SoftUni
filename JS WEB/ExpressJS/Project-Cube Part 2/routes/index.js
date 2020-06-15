const express = require('express');
const router = express.Router();
const Cube = require('../models/cube');
const Accessory = require('../models/accessory');
const { getCube } = require('../controllers/cubeController');

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
    cube.save(err => {
        if (err) {
            console.log(err);
            return res.render('create');
        }
        res.redirect(302, '/');
    });
})

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory');
})

router.post('/create/accessory', (req, res) => {
    const {
        name,
        description,
        imageUrl,
    } = req.body

    const accessory = new Accessory({
        name,
        description,
        imageUrl,
    });

    accessory.save();
    res.redirect(302, '/');
})
router.get('/details/:id', (req, res) => {

    const id = req.params.id;

    Cube.findById(id, (err, cube) => {
        if (err) {
            console.log(err);
        }

        res.render('details', {
            _id: cube.id,
            name: cube.name,
            description: cube.description,
            imageUrl: cube.imageUrl,
            difficultyLevel: cube.difficultyLevel
        });
    });
})

router.get('/attach/accessory/:id', async (req, res) => {

    const cube = await getCube(req.params.id);
    const accessories = await Accessory.find().lean();

    res.render('attachAccessory', {
        accessories,
        cube
    })
})

router.post('/attach/accessory/:id', async (req, res) => {

    const { accessory } = req.body

    await Cube.findByIdAndUpdate(req.params.id, {
        $addToSet:
            { accessories: [accessory] }
    })


    res.redirect(302, `/details/${req.params.id}`)
})

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    Cube.findByIdAndDelete(id, err => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect(301, '/');
})

router.all('*', (req, res) => {
    res.render('404');
})


module.exports = router;