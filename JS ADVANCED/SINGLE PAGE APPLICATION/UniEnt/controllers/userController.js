import { getTemplates, saveAndRedirect } from "../helpers/helper.js";
import { register, login } from "../models/userModel.js";
import { post } from "../helpers/requester.js";
import { appKey } from "../helpers/storage.js";


export function getLogin(ctx) {
    getTemplates('/user/login.hbs', ctx);
}

export function getRegister(ctx) {
    getTemplates('/user/register.hbs', ctx);
}

export function postRegister(ctx) {
    const { username, password, rePassword } = ctx.params;
    if (password !== rePassword) {
        alert('Password do not match');
        throw new Error('Password do not match');
    } else {

        register({ username, password })
            .then(saveAndRedirect.bind(undefined, ctx, '#/'))
            .catch(console.error)
    }
}

export function logoutUser(ctx) {
    post(`user/${appKey}/_logout`)
        .then(() => {
            localStorage.clear();
        });
    ctx.redirect('#/');
}

export function postLogin(ctx) {
    login(ctx.params)
        .then(saveAndRedirect.bind(undefined, ctx, '#/'))
        .catch(console.error)
}