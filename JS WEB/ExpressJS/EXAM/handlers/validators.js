const Users = require('../models/user');

const registerValidator = async (req, res, next) => {

    const { username, password, rePassword } = req.body;

    let error = '';

    const user = await Users.findOne({ username });
    const usernameAndPasswordValidator = /^(?=.*[0-9])(?=.*[a-zA-Z])\w{3,}$/

    if (user) {
        error = 'Username already exist';
    } else if (password !== rePassword) {
        error = 'Passwords do not much';
    } else if (username.length < 3) {
        error = 'The username should be at least 3 characters long'
    } else if (password.length < 3) {
        error = 'The password should be at least 3 characters long';
    } else if (password) {
        if (!(password.match(usernameAndPasswordValidator))) {
            error = 'Password should be mix consisting at least one digit and only english letters';
        }
    } else if (username) {
        if (!(username.match(usernameAndPasswordValidator))) {
            error = 'The username should consist only english letters and digits'
        }
    }

    if (error) {
        return res.render('./guest/register', {
            error
        })
    }
    next();
}

const theatherFormValidator = (req, res, next) => {

    const { title, description, imageUrl } = req.body;

    let error = '';
    if (!title) {
        error = 'The title should not be empty';
    } else if (!description) {
        error = 'The description should not be empty';
    } else if (description.length > 50) {
        error = 'The description should be no more than 50 chars max!'
    } else if (!imageUrl) {
        error = 'The imageUrl should not be empty'
    } else if (!(imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))) {
        error = 'Image url must start with http:// or https://';
    }

    if (error) {
        return res.render('create-theater', {
            isLogged: res.isLogged,
            error
        })
    }
    next()
}

module.exports = { registerValidator, theatherFormValidator }