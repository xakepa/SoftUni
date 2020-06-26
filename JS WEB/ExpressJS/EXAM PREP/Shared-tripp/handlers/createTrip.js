const Trip = require('../models/trip');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { startAndEndPoint, dateTime, carImage, seats, description } = req.body;
    const startPoint = startAndEndPoint.split(' - ')[0];
    const endPoint = startAndEndPoint.split(' - ')[1];
    const date = dateTime.split(' - ')[0];
    const time = dateTime.split(' - ')[1];
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
            console.log('Trip created successfully !');
        }).catch(console.error)
}