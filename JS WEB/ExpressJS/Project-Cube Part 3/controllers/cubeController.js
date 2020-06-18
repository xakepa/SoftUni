const Cube = require('../models/cube');

const getCube = (id) => Cube.findById(id).lean();

module.exports = getCube;