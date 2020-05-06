import { get, post, put, del } from './requester.js';
import { getPartials } from './helper.js';

export function getHome(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials)
        .partial('./views/common/home.hbs');

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

export function logout(ctx) {
    post('user', '_logout')
        .then(() => {
            sessionStorage.clear();
            ctx.redirect('#/');
        })
}

export function getCreateForm(ctx) {
    setHeaderInfo(ctx);

    this.loadPartials(getPartials)
        .partial('./views/common/create.hbs');
}

export function postCreateForm(ctx) {
    setHeaderInfo(ctx);
    ctx.params.currentDonations = 0;
    ctx.params.donorNames = [];
    post('appdata', 'causes', ctx.params, 'Kinvey')
        .then(() => {
            ctx.redirect('#/');
        })
}

export function dashboard(ctx) {
    setHeaderInfo(ctx);

    get('appdata', 'causes', 'Kinvey')
        .then(causes => {
            ctx.causes = causes;

            this.loadPartials(getPartials)
                .partial('./views/common/dashboard.hbs');
        })
}

export function details(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `causes/${id}`, 'Kinvey')
        .then(reasons => {
            ctx.reasons = reasons;
            reasons.isCreator = reasons._acl.creator === sessionStorage.getItem('userId');

            this.loadPartials(getPartials)
                .partial('./views/common/details.hbs')
        }).catch(console.error)
}

export function deleteCause(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    del('appdata', `causes/${id}`, 'Kinvey')
        .then(() => {
            ctx.redirect('#/dashboard');
        })
}

export function donate(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `causes/${id}`, 'Kinvey')
        .then(data => {
            data.currentDonations += +ctx.params.currentDonation;
            if (!data.donorNames.includes(ctx.fullName)) {
                data.donorNames.push(ctx.fullName);
            }

            put('appdata', `causes/${id}`, data)
                .then(() =>
                    ctx.redirect(`#/details/${id}`)
                )
        }).catch(console.error);
}


function setHeaderInfo(ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.fullName = sessionStorage.getItem('fullName');
}

function saveAuthInfo(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('fullName', `${userInfo.username}`);
    sessionStorage.setItem('userId', userInfo._id);
}