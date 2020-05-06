const catches = function () {

    const url = `https://fisher-game.firebaseio.com/catches.json`;

    const get = data => fetch(url).then(r => r.json());

    const post = data =>
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json());

    const del = id => fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
        method: 'DELETE'
    }).catch(console.error)

    return {
        get,
        post,
		put,
        del
    }
}();