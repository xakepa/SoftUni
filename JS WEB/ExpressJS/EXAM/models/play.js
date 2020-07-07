const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,

    },
    creatorId: {
        type: String,
        required: true,
        ref: 'Users'
    },
    createdAt: {
        type: String,
        required: true
    },
    usersLiked: [{
        type: String,
        ref: 'Users'
    }]
})

module.exports = mongoose.model('Play', playSchema);