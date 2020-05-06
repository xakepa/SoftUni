import { get, post, put, del } from './requester.js';
import { getPartials, setHeaderInfo, saveAuthInfo } from './helper.js';

export function getHome(ctx) {
    setHeaderInfo(ctx);
    get('appdata', 'movies', 'Kinvey')
        .then(movies => {
            ctx.movies = movies;

            this.loadPartials(getPartials)
                .partial('./views/main/home.hbs');
        })
}

export function getRegisterForm() {
    this.loadPartials(getPartials)
        .partial('./views/user/register.hbs');
}

export function getLoginForm() {

    this.loadPartials(getPartials)
        .partial('./views/user/login.hbs');
}

export function postRegister(ctx) {
    console.log(ctx);
    const { username, password, repeatPassword } = ctx.params;
    if (username && password && password === repeatPassword) {
        post('user', '', { username, password }, 'Basic')
            .then(userInfo => {
                saveAuthInfo(userInfo);
                ctx.redirect('#/');
            })
            .catch(console.error)
    } else {
        alert('Password do not match or you left empty fields!');
    }
}

export function postLogin(ctx) {
    const { username, password } = ctx.params;

    if (username && password) {
        post('user', 'login', ctx.params, 'Basic')
            .then(userInfo => {
                saveAuthInfo(userInfo);

                ctx.redirect('#/');
            })
            .catch(console.error);
    }
}

export async function logout(ctx) {

    try {
        await post('user', '_logout', 'Kinvey');
        sessionStorage.clear();
        ctx.redirect('#/');
    } catch (e) {
        console.log(e)
    }
}

export function addMovie(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials)
        .partial('./views/main/addMovie.hbs');
}

export function postMovie(ctx) {
    setHeaderInfo(ctx);


    post('appdata', 'movies', ctx.params, 'Kinvey')
        .then(() => {
            ctx.redirect('#/');
        })
}

export function myMovies(ctx) {
    setHeaderInfo(ctx);

    get('appdata', 'movies', 'Kinvey')
        .then(movies => {
            ctx.movies = movies;

            movies.forEach(movie => {
                if (movie._acl.creator === sessionStorage.getItem('userId')) {
                    movie.isCreator = true;
                }
            });

            this.loadPartials(getPartials)
                .partial('./views/main/myMovies.hbs');
        })
}

export function movieDetails(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `movies/${id}`)
        .then(data => {
            ctx.movie = data;

            this.loadPartials(getPartials)
                .partial('./views/main/details.hbs')
        }).catch(console.error);
}

export function getEditForm(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `movies/${id}`)
        .then(data => {
            ctx.movie = data;

            this.loadPartials(getPartials)
                .partial('./views/main/edit.hbs')
        })
        .catch(console.error);
}

export function postEditForm(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    put('appdata', `movies/${id}`, ctx.params)
        .then(() => {
            ctx.redirect(`#/myMovies`);
        })
        .catch(console.error);
}

export function deleteMovie(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    del('appdata', `movies/${id}`, 'Kinvey')
        .then(() => {
            ctx.redirect('#/');
        })
}

