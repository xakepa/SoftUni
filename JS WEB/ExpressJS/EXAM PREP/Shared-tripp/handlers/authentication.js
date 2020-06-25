const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {

    const token = req.cookies.jwt;
    if (!token) {
        return res.redirect(302, '/login');
    }

    try {
        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.redirect(302, '/login');
    }
}

const guest = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        return res.redirect(302, '/');
    }
    next();
}

const authAccessJSON = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.json({
            error: 'Not authenticated'
        })
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.json({
            error: 'Not authenticated'
        })
    }
}

const isLoggedIn = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        res.isLogged = true;
        res.email = decodedJwt.email;
    }
    next();
}

module.exports = { guest, isAuth, authAccessJSON, isLoggedIn }