const mongoose = require('mongoose');

const DB_PASSWORD = process.env.DB_PASSWORD;

const connectionStr = `mongodb+srv://admin:${DB_PASSWORD}@demo-base-sjwc4.mongodb.net/demo-base?retryWrites=true&w=majority`

mongoose.connect(connectionStr, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    const newStudent = {
        firstName: 'Qvor',
        lastName: 'Marinov',
        facultyNumber: 887903
    }
    new StudentModel(newStudent).save(error => {
        if (error) {
            return console.log('Error', error);
        }
        console.log('Student is succesfully stored');
    })
})