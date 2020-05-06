export const appKey = 'kid_BJCVONrpS';
export const appSecret = '1a02e68155b04592ad22078c35c9c19f';

export function saveData(key, value) {
    localStorage.setItem(key + appKey, JSON.stringify(value));
}

export function getData(key) {
    return localStorage.getItem(key + appKey);
}

export function saveUser(data) {
    saveData('userInfo', data);
    saveData('authtoken', data._kmd.authtoken);
}