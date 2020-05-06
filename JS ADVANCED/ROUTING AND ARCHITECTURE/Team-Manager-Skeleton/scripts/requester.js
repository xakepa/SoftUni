const baseUrl = `https://baas.kinvey.com`
const appKey = 'kid_ryJp-UA3B';
const secret = 'b6eee54e588f4b8e957210631a3fb9f5';

function createAuthorization(type) {

    return type === 'Basic'
        ? `Basic ${btoa(`${appKey}:${secret}`)}`
        : `Kinvey ${sessionStorage.getItem('authtoken')}`
}

function makeHeaders(type, httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': createAuthorization(type),
            'Content-Type': 'application/json'
        }
    }

    if (httpMethod === 'POST' || httpMethod === 'PUT') {
        headers.body = JSON.stringify(data);
    }
    return headers;
}

function handleError(e) {
    if (!e.ok) {
        throw new Error(e.statusText);
    }
    return e;
}

function deserializeData(data) {
    return data.json();
}

async function createPromise(kinveyModule, endpoint, headers) {
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

    try {
        const data = await fetch(url, headers);
        return deserializeData(data);
    }
    catch (e) {
        return handleError(e);
    }
}



export function get(kinveyModule, endpoint, type) {
    const headers = makeHeaders(type, 'GET');

    return createPromise(kinveyModule, endpoint, headers)
}

export function post(kinveyModule, endpoint, data, type) {
    const headers = makeHeaders(type, 'POST', data);

    return createPromise(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data, type) {
    const headers = makeHeaders(type, 'PUT', data)

    return createPromise(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint) {
    const headers = makeHeaders(type, 'DELETE')

    return createPromise(kinveyModule, endpoint, headers);
}

//alternative
// function createPromise(kinveyModule, endpoint, headers) {
//     const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

//     return fetch(url, headers)
//         .then(deserializeData)
//         .catch(handleError)
// }