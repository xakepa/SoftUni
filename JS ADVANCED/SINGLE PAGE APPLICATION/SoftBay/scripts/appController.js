import { get, post, put, del } from './requester.js';
import { getPartials, setHeaderInfo, saveAuthInfo } from './helper.js';

export function getHome(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials)
        .partial('./views/main/home.hbs');
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
    const { username, password, rePassword } = ctx.params;
    if (username && password && password === rePassword) {
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

export function getCreateForm(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials)
        .partial('./views/main/create.hbs');
}

export function postCreateForm(ctx) {
    setHeaderInfo(ctx);

    post('appdata', 'offers', ctx.params, 'Kinvey')
        .then(() => {
            ctx.redirect('#/dashboard');
        })
}

export function dashboard(ctx) {
    setHeaderInfo(ctx);

    get('appdata', 'offers', 'Kinvey')
        .then(offers => {
            ctx.offers = offers;

            offers.forEach(offer => {
                if (offer._acl.creator === sessionStorage.getItem('userId')) {
                    offer.isCreator = true;
                }
            });

            this.loadPartials(getPartials)
                .partial('./views/main/dashboard.hbs');
        })
}

export function offerDetails(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `offers/${id}`)
        .then(data => {
            ctx.offer = data;

            this.loadPartials(getPartials)
                .partial('./views/main/details.hbs')
        }).catch(console.error);
}

export function getEditForm(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `offers/${id}`)
        .then(data => {
            ctx.offer = data;

            this.loadPartials(getPartials)
                .partial('./views/main/edit.hbs')
        })
        .catch(console.error);
}

export function postEditForm(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    put('appdata', `offers/${id}`, ctx.params)
        .then(() => {
            ctx.redirect(`#/details/${id}`);
        })
        .catch(console.error);
}

export function deleteOffer(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    del('appdata', `offers/${id}`, 'Kinvey')
        .then(() => {
            ctx.redirect('#/dashboard');
        })
}

