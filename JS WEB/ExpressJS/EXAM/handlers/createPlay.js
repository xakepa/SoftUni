const Play = require('../models/play');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { title, description, isPublic, imageUrl } = req.body;
    const public = isPublic ? true : false

    const token = req.cookies.jwt;
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);


    Play.create({
        title,
        description,
        isPublic: public,
        imageUrl,
        creatorId: decodedJwt.userId,
        createdAt: new Date().toString().slice(0, 24)
    })
        .then(() => {
            res.redirect('/')
        }).catch(console.error)
}