import {
    getHome, getLoginForm, getRegisterForm,
    postRegister, postLogin, logout, getCreateForm, postCreateForm,
    dashboard, offerDetails, getEditForm, postEditForm, deleteOffer
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

    this.get('#/details/:id', offerDetails);

    this.get('#/edit/:id', getEditForm);

    this.post('#/edit/:id', postEditForm);

    this.get('#/delete/:id', deleteOffer);
})

app.run('#/');