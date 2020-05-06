function attachEvents() {
    const author = document.getElementById('author');
    const message = document.getElementById('content');
    const messagesHistory = document.getElementById('messages');

    function submit() {
        fetch('https://rest-messanger.firebaseio.com/messanger.json', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ author: author.value, content: message.value })
        })
        author.value = '';
        message.value = '';
    }

    function refresh() {
        fetch('https://rest-messanger.firebaseio.com/messanger.json')
            .then(response => response.json())
            .then(data => {
                messagesHistory.textContent = Object.values(data)
                    .map(m => `${m.author}: ${m.content}`).join('\n');
            }).catch(e => console.log('Unexpected error'));
    }

    return {
        submit,
        refresh
    }
}
let result = attachEvents();