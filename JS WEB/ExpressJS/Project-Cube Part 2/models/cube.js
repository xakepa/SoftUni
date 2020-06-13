const mongoose = require('mongoose');

const CubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    imageUrl: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessories'
    }]
})

module.exports = mongoose.model('Cube', CubeSchema)