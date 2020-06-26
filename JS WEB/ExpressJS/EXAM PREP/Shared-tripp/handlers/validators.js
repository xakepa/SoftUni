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

module.exports = { registerValidator }