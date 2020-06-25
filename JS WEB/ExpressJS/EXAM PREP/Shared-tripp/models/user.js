const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tripHistory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip'
    }]
})

module.exports = mongoose.model('Users', UserSchema);