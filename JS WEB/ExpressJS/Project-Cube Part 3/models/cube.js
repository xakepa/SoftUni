const mongoose = require('mongoose');

const CubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    creatorId: {
        type: String,
        required: true,
        ref: 'Users'
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
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
    return url.startsWith('http://') || url.startsWith('https://')
}, 'Image URL is invalid!');

module.exports = mongoose.model('Cube', CubeSchema)