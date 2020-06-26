const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    startPoint: {
        type: String,
        required: true
    },
    endPoint: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    carImage: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true,
        ref: 'Users'
    },
    buddies: [{
        type: String,
        ref: 'Users'
    }]
})

module.exports = mongoose.model('Trip', tripSchema);