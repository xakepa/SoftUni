const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    likedPlays: [{
        type: String,
        ref: 'Play'
    }]
})

module.exports = mongoose.model('Users', UserSchema);