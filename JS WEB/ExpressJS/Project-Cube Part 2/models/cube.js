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

CubeSchema.path('imageUrl').validate((url) => {
    return url.startsWith('http') || url.startsWith('https')
}, 'Image URL is invalid!');

module.exports = mongoose.model('Cube', CubeSchema)