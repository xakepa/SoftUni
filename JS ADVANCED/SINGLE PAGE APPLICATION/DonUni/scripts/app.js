import {
    getHome, getRegisterForm, getLoginForm, postRegister,
    postLogin, logout, getCreateForm, postCreateForm, dashboard, details, deleteCause, donate
} from './appController.js';

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/', getHome);

    this.get('#/register', getRegisterForm);

    this.get('#/login', getLoginForm);

    this.post('#/register', postRegister);

    this.post('#/login', postLogin);

    this.get('#/logout', logout);

    this.get('#/create', getCreateForm);

    this.post('#/create', postCreateForm);

    this.get('#/dashboard', dashboard);

    this.get('#/details/:id', details);

    this.get('#/delete/:id', deleteCause);

    this.post('#/donate/:id', donate);
})

app.run('#/');