const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    facultyNumber: {
        type: Number,
        required: true,
        unique: true
    },
})

module.exports = mongoose.model('Student', StudentSchema);