const username = 'Plamen';
const password = 'novaParola';

const baseUrl = `https://baas.kinvey.com`
const appKey = 'kid_Hk1vFaf3H';
const secret = '80053544dced49cf984d200dd53ad2dc';

function makeHeaders(httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
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

async function createPromise(kinveyModule, endpoint, headers) {
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

    try {
        const stream = await fetch(url, headers);
        return stream.json();
    }
    catch (e) {
        return handleError(e);
    }
}

// function createPromise(kinveyModule, endpoint, headers) {
//     const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

//     return fetch(url, headers)
//         .then(r => r.json())
//         .catch(handleError)
// }



export function get(kinveyModule, endpoint) {
    const headers = makeHeaders('GET');

    return createPromise(kinveyModule, endpoint, headers)
}

export function post(kinveyModule, endpoint, data) {
    const headers = makeHeaders('POST', data);

    return createPromise(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data) {
    const headers = makeHeaders('PUT', data)

    return createPromise(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint) {
    const headers = makeHeaders('DELETE')

    return createPromise(kinveyModule, endpoint, headers);
}