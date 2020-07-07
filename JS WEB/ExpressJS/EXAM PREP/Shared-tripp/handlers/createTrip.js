const Trip = require('../models/trip');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { startAndEndPoint, dateTime, carImage, seats, description } = req.body;
    const [startPoint, endPoint] = startAndEndPoint.split(' - ')
    const [date, time] = dateTime.split(' - ');
    const token = req.cookies.jwt;
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);


    Trip.create({
        startPoint,
        endPoint,
        date,
        time,
        carImage,
        creatorId: decodedJwt.userId,
        seats,
        description
    })
        .then(() => {
            res.redirect('/main')
        }).catch(console.error)
}