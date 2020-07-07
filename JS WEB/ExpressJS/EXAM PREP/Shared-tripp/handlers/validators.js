const Users = require('../models/user');

const registerValidator = async (req, res, next) => {

    const { email, password, rePassword } = req.body;

    let error = '';

    const user = await Users.findOne({ email });

    const passwordValidator = /^(?=.*[0-9])(?=.*[a-zA-Z])\w{6,}$/
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const validEmail = email.match(emailValidator);

    if (!validEmail) {
        error = 'The email should be in the following format (mailboxname @ domainname) - "username@domain.bg"';
    } else if (user) {
        error = 'Username already exist';
    } else if (password !== rePassword) {
        error = 'Passwords do not much';
    } else if (password.length < 6) {
        error = 'Password should be at least 6 digits and letters';
    } else if (!(password.match(passwordValidator))) {
        error = 'Password should be mix consisting at least one digit and only english letters';
    }

    if (error) {
        return res.render('./guest/register', {
            error
        })
    }
    next();
}

const tripFormValidator = (req, res, next) => {

    const { startAndEndPoint, dateTime, carImage, seats, description } = req.body;
    const [startPoint, endPoint] = startAndEndPoint.split(' - ')
    const [date, time] = dateTime.split(' - ');

    let error = '';

    if (!startPoint || !endPoint) {
        error = 'Starting and End point should be at least 4 characters long (each) and should be separated with single space, dash and another single space (" - ")'
    } else if (!date || !time) {
        error = 'Date and Time should be at least 6 characters long (each) and should be separated with single space, dash and another single space (" - ")'
    } else if (!(carImage.startsWith('http://') || carImage.startsWith('https://'))) {
        error = 'Image url must start with http:// or https://'
    } else if (seats < 1) {
        error = 'The Seats should be positive number';
    } else if (description.length < 10) {
        error = 'The description should be at least 10 characters long';
    }

    if (error) {
        return res.render('offerTripp', {
            loggedEmail: res.email,
            error
        })
    }

    next()
}

module.exports = { registerValidator, tripFormValidator }