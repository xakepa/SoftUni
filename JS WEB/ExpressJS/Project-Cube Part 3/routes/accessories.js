const express = require('express');
const router = express.Router();
const Accessory = require('../models/accessory');
const getCube = require('../controllers/cubeController');
const { isAuth, authAccessJSON } = require('../controllers/user');
const Cube = require('../models/cube');

router.get('/create/accessory', isAuth, (req, res) => {
    const isLogged = req.cookies.jwt;

    res.render('createAccessory', { isLogged });
})

router.post('/create/accessory', authAccessJSON, (req, res) => {
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

router.get('/attach/accessory/:id', isAuth, async (req, res) => {

    const cube = await getCube(req.params.id);
    const accessories = await Accessory.find().lean();
    const isLogged = req.cookies.jwt;

    const cubeAccessory = cube.accessories.map(acc => String(acc._id));
    const notAttachedAccessories = accessories.filter(acc => !cubeAccessory.includes(String(acc._id)));


    res.render('attachAccessory', {
        notAttachedAccessories,
        cube,
        isFullorEmpty: cube.accessories.length === accessories.length
            || cube.accessories.length === 0,
        isFull: cube.accessories.length === accessories.length,
        isLogged
    })
})

router.post('/attach/accessory/:id', authAccessJSON, async (req, res) => {

    const { accessory } = req.body

    await Cube.findByIdAndUpdate(req.params.id, {
        $addToSet:
            { accessories: [accessory] }
    })


    res.redirect(302, `/details/${req.params.id}`)
})

module.exports = router;