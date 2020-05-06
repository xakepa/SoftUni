export const getPartials = {
    header: './views/common/header.hbs',
    footer: './views/common/footer.hbs',
    succes: './views/notifications/succes.hbs',
    error: './views/notifications/error.hbs'
}

export function setHeaderInfo(ctx) {
    ctx.isLogged = sessionStorage.getItem('authtoken') !== null;
    ctx.fullName = sessionStorage.getItem('fullName');
}

export function saveAuthInfo(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('fullName', `${userInfo.username}`);
    sessionStorage.setItem('userId', userInfo._id);
}

