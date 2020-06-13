const express = require('express');
const router = express.Router();
const { homeHandler } = require('../homeHandler');

router.get('/', homeHandler, (req, res) => {
    console.log('Router working fine');
    return res.send(`Welcome ${res.nums}`)
});

module.exports = router;