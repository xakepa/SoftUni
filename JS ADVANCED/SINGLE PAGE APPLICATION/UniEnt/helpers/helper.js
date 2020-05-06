import { saveUser, getData } from "./storage.js"

export function getTemplates(path, ctx) {
    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs',
        error: '../views/events/error.hbs',
        eventsHolder: '../views/events/eventsHolder.hbs',
    })
        .partial(`../views/${path}`)
}

export function saveAndRedirect(ctx, path, data) {
    saveUser(data);
    ctx.redirect(path);
}

export function isLogged(ctx) {
    if (getData('userInfo') !== null) {
        ctx.isLogged = true;
        ctx.username = JSON.parse(getData('userInfo')).username;
    }
    return ctx;
}