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
router.get('/details/:id', async (req, res) => {


    const cubeWithAccs = await Cube.findById(req.params.id)
        .populate('accessories').lean();

    res.render('details', {
        ...cubeWithAccs,
        isEmpty: cubeWithAccs.accessories.length === 0
    });
});


router.get('/attach/accessory/:id', async (req, res) => {

    const cube = await getCube(req.params.id);
    const accessories = await Accessory.find().lean();

    const cubeAccessory = cube.accessories.map(acc => String(acc._id));
    const notAttachedAccessories = accessories.filter(acc => !cubeAccessory.includes(String(acc._id)));


    res.render('attachAccessory', {
        notAttachedAccessories,
        cube,
        isFullorEmpty: cube.accessories.length === accessories.length
            || cube.accessories.length === 0,
        isFull: cube.accessories.length === accessories.length
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