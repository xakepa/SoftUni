import {
    getHome, getRegisterForm, getLoginForm, postRegister, postLogin, logout, addMovie,
    postMovie, myMovies, movieDetails, getEditForm, postEditForm, deleteMovie
} from './appController.js';

const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/', getHome);

    this.get('#/register', getRegisterForm);

    this.get('#/login', getLoginForm);

    this.post('#/register', postRegister);

    this.post('#/login', postLogin);

    this.get('#/logout', logout);

    this.get('#/add', addMovie);

    this.post('#/add', postMovie);

    this.get('#/myMovies', myMovies);

    this.get('#/details/:id', movieDetails);

    this.get('#/edit/:id', getEditForm);

    this.post('#/edit/:id', postEditForm);

    this.get('#/delete/:id', deleteMovie);
})

app.run('#/');