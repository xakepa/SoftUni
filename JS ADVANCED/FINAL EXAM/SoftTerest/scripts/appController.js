import { get, post, put, del } from './requester.js';
import { getPartials, setHeaderInfo, saveAuthInfo } from './helper.js';

export function getHome(ctx) {
    setHeaderInfo(ctx);
    get('appdata', 'ideas', 'Kinvey')
        .then(ideas => {
            ctx.ideas = ideas;

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

    const { username, password, repeatPassword } = ctx.params;
    if (username.length >= 3 && password.length >= 3 && password === repeatPassword) {
        post('user', '', { username, password }, 'Basic')
            .then(userInfo => {
                saveAuthInfo(userInfo);
                ctx.redirect('#/');
            })
            .catch(console.error)
    } else {
        alert('The username should be at least 3 characters long\nThe password should be at least 3 characters long\nThe repeat password should be equal to the password');
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
    ctx.params.likes = 0;
    ctx.params.comments = [];
    post('appdata', 'ideas', ctx.params, 'Kinvey')
        .then(() => {
            ctx.redirect('#/');
        })
}

export function getDetails(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `ideas/${id}`)
        .then(data => {
            ctx.idea = data;
            if (ctx.idea._acl.creator === sessionStorage.getItem('userId')) {
                ctx.idea.isCreator = true;
            }

            this.loadPartials(getPartials)
                .partial('./views/main/details.hbs')
        }).catch(console.error);
}

export function deleteIdea(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    del('appdata', `ideas/${id}`, 'Kinvey')
        .then(() => {
            ctx.redirect('#/');
        })
        .catch(console.error)
}

export function postComment(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;

    get('appdata', `ideas/${id}`)
        .then(data => {
            if (!data.comments.includes(ctx.fullName)) {

                data.comments.push(`${ctx.fullName}: ${ctx.params.newComment}`)
            }
            put('appdata', `ideas/${id}`, data)
                .then(ctx.redirect(`#/details/${id}`))
        })
        .catch(console.error)
}

export function likeIdea(ctx) {
    setHeaderInfo(ctx);
    const id = ctx.params.id;


    get('appdata', `ideas/${id}`)
        .then(data => {
            data.likes++;
            put('appdata', `ideas/${id}`, data)
                .then(ctx.redirect(`#/details/${id}`))
                .catch(console.error)
        })
        .catch(console.error)
}

export function getProfile(ctx) {
    setHeaderInfo(ctx);

    get('appdata', 'ideas', 'Kinvey')
        .then(ideas => {
            ctx.ideas = ideas;
            let ideasNumber = 0;
            const ideaTitles = [];
            ideas.forEach(idea => {
                if (idea._acl.creator === sessionStorage.getItem('userId')) {
                    ideasNumber++;
                    ideaTitles.push(idea.title);
                }
            });
            ctx.count = ideasNumber;
            ctx.allIdeas = [...ideaTitles];

            this.loadPartials(getPartials)
                .partial('./views/user/profile.hbs');
        })
}
