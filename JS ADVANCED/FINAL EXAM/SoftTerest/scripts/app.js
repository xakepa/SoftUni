import {
    getHome, getRegisterForm, getLoginForm, postRegister, postLogin, logout
    , getCreateForm, postCreateForm, getDetails, deleteIdea,
    postComment, likeIdea, getProfile
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

    this.get('#/details/:id', getDetails);

    this.post('#/comment/:id', postComment);

    this.get('#/like/:id', likeIdea);

    this.get('#/delete/:id', deleteIdea);

    this.get('#/profile', getProfile);
})

app.run('#/');